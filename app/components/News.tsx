export interface NewsProps {
  title: string
  source: string
  date: string
  url: string
}

export default function News({ title, source, date, url }: NewsProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <span className="text-brand-yellow font-bold">{source}</span>
      <span className="text-white">|{date}</span>
      <br />
      <span className="text-brand-yellow">{title}</span>
    </a>
  )
}
