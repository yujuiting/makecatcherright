import { } from '@mdx-js/react'

export interface CandidateProps {
  name: string
  title: string
  image: string
  currentPosition: string
  education: string
  children: React.ReactNode
}

export default function Candidate({
  name,
  title,
  image,
  currentPosition,
  education,
  children,
}: CandidateProps) {
  return (
    <div className="grid gap-2 grid-rows-[auto_auto_1fr] grid-cols-[auto_1fr] md:grid-rows-[1fr_auto] md:grid-cols-[auto_1fr] *:grid *:items-center">
      <div
        className="w-24 h-24 bg-center bg-cover rounded-full row-span-2 md:row-span-1"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="md:col-start-1">
        <span className="text-2xl font-bold">{name}</span>
        <span className="w-[140px]">{title}</span>
      </div>
      <div className="text-neutral-500 md:col-start-2">
        現任：{currentPosition}
        <br />
        學歷：{education}
      </div>
      <div className="col-span-2 bg-neutral-200 p-2 md:row-start-1 md:col-start-2 flex !items-start">
        {children}
      </div>
    </div>
  )
}
