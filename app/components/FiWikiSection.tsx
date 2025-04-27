import Image from 'next/image'

export default function FiWikiSection({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col gap-2 md:max-w-1/2 mx-auto" {...props}>
      <div className="flex flex-row items-center gap-4">
        <Image
          src="/images/subtitle_fini.png"
          alt="外資小檔案"
          className="w-[120px]"
          width={248}
          height={62}
        />
        <hr className="grow border-2 border-neutral-400" />
      </div>
      {children}
      <hr className="grow border-2 border-neutral-400" />
    </div>
  )
}
