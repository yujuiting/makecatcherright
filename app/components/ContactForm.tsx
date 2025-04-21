'use client'

import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import send from './send.action'

export default function ContactForm() {
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    await send({
      name: data.name as string,
      phone: data.phone as string,
      email: data.email as string,
      shares: data.shares as string,
      message: data.message as string,
    })
  }

  return (
    <form
      className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_minmax(100px,1fr)_auto_minmax(100px,1fr)] gap-2"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-subgrid col-span-2 items-start">
        <Label htmlFor="name">姓名</Label>
        <Input className="flex-grow" type="text" id="name" name="name" />
      </div>
      <div className="grid grid-cols-subgrid col-span-2 items-start">
        <Label htmlFor="phone">電話</Label>
        <Input className="flex-grow" type="string" id="phone" name="phone" />
      </div>
      <div className="grid grid-cols-subgrid col-span-2 items-start">
        <Label htmlFor="email">E-mail</Label>
        <Input className="flex-grow" type="email" id="email" name="email" />
      </div>
      <div className="grid grid-cols-subgrid col-span-2 items-start">
        <Label htmlFor="shares">持有張數</Label>
        <Input
          className="flex-grow"
          type="number"
          min={0}
          step={1}
          id="shares"
          name="shares"
        />
      </div>
      <div className="grid grid-cols-subgrid col-span-2 md:col-span-4 items-start">
        <Label htmlFor="message">訊息</Label>
        <Textarea className="md:col-span-3" id="message" name="message" />
      </div>
      <div className="md:col-start-2 col-span-2 md:col-span-3 flex flex-col items-center gap-2">
        <div className="text-center">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <label htmlFor="agree">
            按下送出表示已詳細閱讀，並同意提供個人資料及
            <a className="text-brand-yellow underline" href="/privacy">
              服務條款和隱私權政策
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="bg-indigo-900 text-white min-w-40 disabled:opacity-50"
          disabled={!confirmed}
        >
          送出
        </button>
      </div>
    </form>
  )
}

function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="text-white inline-block whitespace-nowrap" {...props} />
  )
}

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={twMerge(
        'bg-white inset-shadow-[0_0_4px_rgba(0,0,0,.5)]',
        className
      )}
      {...props}
    />
  )
}

function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={twMerge(
        'bg-white inset-shadow-[0_0_4px_rgba(0,0,0,.5)]',
        className
      )}
      {...props}
    />
  )
}
