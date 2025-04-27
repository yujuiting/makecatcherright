'use server'

import { config } from 'dotenv'
import { google } from 'googleapis'

config()

export interface SendPayload {
  name: string
  phone: string
  email: string
  shares: string
  message: string
}

export default async function send({
  name,
  phone,
  email,
  shares,
  message,
}: SendPayload) {
  const auth = await google.auth.getClient({
    projectId: '',
    credentials: {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      universe_domain: 'googleapis.com',
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const resp = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: 'Contact',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          name,
          phone,
          email,
          shares,
          message,
          new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        ],
      ],
    },
  })

  console.log(resp)
}
