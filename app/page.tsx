import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './components/ContactForm'
import Section, { SectionTitle } from './components/Section'
import Candidates from './sections/Candidates.mdx'
import NewsList from './sections/NewsList.mdx'
import ShareholderLetter from './sections/ShareholderLetter.mdx'

export default async function Home() {
  return (
    <div className="flex flex-col container mx-auto">
      <header className="bg-[url(/images/bg_hero.jpg)] bg-cover bg-center">
        <div className="flex flex-row gap-4 px-4 py-2 bg-black text-white">
          <a href="tel:0800002474" target="_blank">
            <span className="hidden sm:inline">來電洽詢</span>
            <span className="sm:hidden">電話</span>{' '}
            <span className="text-brand-green">0800-00-2474</span>
          </a>
          <a href="https://lin.ee/4AbMrej" target="_blank">
            <span className="hidden sm:inline">搜尋官方LINE賬號</span>
            <span className="sm:hidden">LINE</span>{' '}
            <span className="text-brand-green">@2474go</span>
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
        <a
          className="bg-brand-yellow flex flex-row justify-center mt-18 py-4 sm:py-0"
          href="https://lin.ee/4AbMrej"
          target="_blank"
        >
          <div className="relative flex flex-row items-center justify-center gap-0 sm:gap-4">
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
              className="w-1/2 z-1"
            />
            <div className="relative flex flex-col justify-end h-full py-1 gap-4 z-0">
              <Image
                src="/images/img_megaphone.png"
                width={800}
                height={681}
                alt="megaphone"
                className="absolute -z-0 top-[-120px] right-[110px] w-[160px] h-[136px] max-w-none scale-75 sm:scale-100 origin-right"
              />
              <Image
                src="/line-qrcode.png"
                alt="line qrcode"
                width={300}
                height={300}
                className="w-28 h-28 absolute bottom-[44px] left-1/2 -translate-x-1/2 border-4 border-brand-yellow rounded"
              />
              <div className="bg-white text-black border-4 border-black rounded-full px-4">
                @2474go
              </div>
            </div>
          </div>
        </a>
      </header>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Section className="bg-[url(/images/bg_blue.jpg)] bg-cover bg-center flex items-center">
          <Link href="/locations" target="_blank">
            <Image
              src="/images/img_location.png"
              alt="location"
              width={715}
              height={268}
            />
          </Link>
        </Section>
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
        <NewsList />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
