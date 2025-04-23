import { twMerge } from 'tailwind-merge'

export default function Letter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={twMerge('p-4 shadow-xl bg-white/85', className)} {...props}>
      {children}
    </div>
  )
}
