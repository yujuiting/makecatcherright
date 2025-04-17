import { twMerge } from 'tailwind-merge'

export default function Section({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge('p-4 w-full flex flex-col gap-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function SectionTitle({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className="text-xl text-white w-fit font-bold bg-brand-yellow rounded-full px-4 text-shadow-[0_0_2px_rgba(0,0,0)]"
      {...props}
    >
      {children}
    </h3>
  )
}
