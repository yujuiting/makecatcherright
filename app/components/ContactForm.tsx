'use client'

import { twMerge } from 'tailwind-merge'
import send from './send.action'

export default function ContactForm() {
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
    <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-row items-start">
        <Label htmlFor="name">姓名</Label>
        <Input className="flex-grow" type="text" id="name" name="name" />
      </div>
      <div className="flex flex-row items-start">
        <Label htmlFor="phone">電話</Label>
        <Input className="flex-grow" type="string" id="phone" name="phone" />
      </div>
      <div className="flex flex-row items-start">
        <Label htmlFor="email">電子郵件</Label>
        <Input className="flex-grow" type="email" id="email" name="email" />
      </div>
      <div className="flex flex-row items-start">
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
      <div className="col-span-2 flex flex-row items-start">
        <Label htmlFor="message">訊息</Label>
        <Textarea className="flex-grow" id="message" name="message" />
      </div>
      <div>
        <div>
          <input type="checkbox" id="agree" name="agree" />
          <label htmlFor="agree">
            我已閱讀並同意<a href="/privacy">隱私權政策</a>
          </label>
        </div>
        <button type="submit" className="bg-indigo-900 text-white min-w-40">
          送出
        </button>
      </div>
    </form>
  )
}

function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className="text-white w-20 inline-block" {...props} />
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
