import { readdir } from 'fs/promises'
import Image from 'next/image'
import path from 'path'
import ContactForm from './components/ContactForm'
import Section, { SectionTitle } from './components/Section'
import Candidates from './sections/Candidates.mdx'
import ShareholderLetter from './sections/ShareholderLetter.mdx'

interface NewsMetadata {
  title: string
  source: string
  date: string
}

async function getNewsMetadata(news: string): Promise<NewsMetadata> {
  const { metadata } = await import(`./news/${news}/page.mdx`)
  return metadata
}

async function getNewsList() {
  const news = await readdir(path.resolve(process.cwd(), 'app/news'))
  return Promise.all(news.map(getNewsMetadata))
}

export default async function Home() {
  const newsList = await getNewsList()

  return (
    <div className="flex flex-col container mx-auto">
      <header className="bg-blue-400">
        <div className="flex flex-row gap-4 px-4 py-2 bg-black text-white">
          <a href="tel:08000002474">
            來電洽詢 <span className="text-brand-green">0800-000-2474</span>
          </a>
          <a>
            搜尋官方LINE賬號<span className="text-brand-yellow">@2474go</span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 font-extrabold text-white text-shadow-[0_0_24px_black] py-10">
          <h1 className="flex flex-col items-center">
            <span className="text-4xl">
              決定「<span className="text-brand-yellow">可成</span>」
            </span>
            <span className="text-7xl text-brand-yellow">要你才成</span>
          </h1>
          <h2 className="text-2xl">股東進入董事會，反轉可成，無限可能！</h2>
        </div>
        <div className="bg-brand-yellow flex flex-row justify-center mt-18">
          <div className="relative flex flex-row items-center gap-4 pr-36">
            <Image
              src="/line-icon.png"
              alt="LINE"
              width={1000}
              height={1000}
              className="w-12 h-12"
            />
            <p className="font-extrabold">
              <span className="text-4xl text-brand-green">小股東募集中</span>
              <br />
              <span className="text-2xl">馬上加入鞏固權益</span>
            </p>
            <div className="absolute right-0 bottom-0 border-4 border-brand-yellow rounded flex flex-col items-center gap-4">
              <Image
                src="/line-qrcode.png"
                alt="line qrcode"
                width={300}
                height={300}
                className="w-28 h-28"
              />
              <div className="bg-white text-black border-4 border-black rounded-full px-4">
                @2474go
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Candidates />
        <Section className="bg-blue-400">
          <SectionTitle>聯絡我們</SectionTitle>
          <ContactForm />
        </Section>
        <ShareholderLetter />
        <Section className="bg-blue-400">
          <SectionTitle>相關新聞連結</SectionTitle>
          <div className="flex flex-row flex-wrap text-sm">
            {newsList.map((news) => (
              <a
                key={[news.date, news.source, news.title].join(':')}
                className="block w-1/2 odd:pr-4 pb-4"
                href={`/news/${news.date}`}
              >
                <span className="text-brand-yellow font-bold">
                  {news.source}
                </span>
                <span className="text-white">|{news.date}</span>
                <br />
                <span className="text-brand-yellow">{news.title}</span>
              </a>
            ))}
          </div>
        </Section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
