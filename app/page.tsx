import Image from 'next/image'
import ContactForm from './components/ContactForm'
import Section, { SectionTitle } from './components/Section'

export default function Home() {
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
        <Section>
          <SectionTitle>候選人政見</SectionTitle>
        </Section>
        <Section className="bg-blue-400">
          <SectionTitle>聯絡我們</SectionTitle>
          <ContactForm />
        </Section>
        <Section>
          <SectionTitle>致股東的信</SectionTitle>
        </Section>
        <Section className="bg-blue-400">
          <SectionTitle>相關新聞連結</SectionTitle>
        </Section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
