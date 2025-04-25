'use client'

import { useState } from 'react'
import Popup from './Popup'

export default function TermsAndPrivacyTrigger() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className='text-brand-yellow underline cursor-pointer'>服務條款和隱私權政策</button>
      <Popup
        url="/terms-and-privacy"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
