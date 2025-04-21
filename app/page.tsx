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
      <header className="bg-[url(/images/bg_hero.jpg)] bg-cover bg-center">
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
            <Image
              src="/images/hero_title.png"
              alt="決定「可成」，要你才成！股東進入董事會，反轉可成，無限可能！"
              width={836}
              height={356}
              className="w-full"
            />
          </h1>
        </div>
        <div className="bg-brand-yellow flex flex-row justify-center mt-18">
          <div className="relative flex flex-row items-center gap-4 pr-4">
            <Image
              src="/images/img_megaphone.png"
              width={800}
              height={681}
              alt="megaphone"
              className="absolute w-[160px] -z-0 top-[-120px] right-[110px]"
            />
            <Image
              src="/line-icon.png"
              alt="LINE"
              width={1000}
              height={1000}
              className="w-12 h-12"
            />
            <Image
              src="/images/bubble_line.png"
              alt="小股東募集中，馬上加入鞏固權益！"
              width={600}
              height={210}
              className="w-1/2 z-0"
            />
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
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Candidates />
        <Section className="bg-[url(/images/bg_blue.jpg)] bg-cover bg-center">
          <SectionTitle>聯絡我們</SectionTitle>
          <div className="flex flex-row gap-20 justify-center">
            <ContactForm />
            <div className="relative aspect-square h-[200px] bg-[#1C75AA] rounded-full hidden md:block">
              <Image
                src="/images/img_megaphone.png"
                width={800}
                height={681}
                alt="megaphone"
                className="w-full absolute right-12 bottom-10 scale-110"
              />
            </div>
          </div>
        </Section>
        <ShareholderLetter />
        <Section className="bg-[url(/images/bg_blue.jpg)] bg-cover bg-center">
          <SectionTitle>相關新聞連結</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 text-sm gap-4">
            {newsList.map((news) => (
              <a
                key={[news.date, news.source, news.title].join(':')}
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
