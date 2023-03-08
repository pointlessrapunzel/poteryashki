import Card from '@/components/Card'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const news = {
  image: '/images/news-1.png',
  title: 'Новогодняя елка для наших любимцев!',
  content: marked.parse(
    matter(
      'Наши друзья из Мультицентра «Моя территория» сделали для подопечных Фонда настоящую новогоднюю ёлку! С подарками :)\n\nДо 28 декабря вы можете передать подарки под елочку для наших подопечных!\n\nПодарки индивидуальные, потому список самых-самых нужных и важных подарков тут:\n\n• Royal Canin (12+ для пожилых кошек, Gastrointestinal, Sensitive control, Renal, Digest, Urinary);\n\n• Wellkiss для привередливых кошек;\n\n• большие прессованные кости для разгрызания.\n\nА ребята и вас не оставят без подарка — каждому участнику акции вручат открытку от ECODECOR ;)\n\nМоя территория - Ванцетти 1, 68-96-96.\n'
    ).content
  ),
}

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>{`${news.title} | Потеряшки`}</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid grid-cols-main justify-center gap-y-16 bg-brand-200 py-24'>
        <div className='col-contain text-xl font-light'>
          <Link href='/'>Главная</Link> - <Link href='/news'>Новости</Link> -{' '}
          {news.title}
        </div>
        <div className='col-span-5 col-start-2'>
          <h1 className='text-6xl'>{news.title}</h1>
          <div
            className='md-content mt-16 space-y-10 text-3xl'
            dangerouslySetInnerHTML={{ __html: news.content }}
          ></div>
        </div>
        <div className='col-span-4 col-start-8 flex flex-col gap-16'>
          {['/images/news-1.png', '/images/news-2.png'].map((i) => (
            <Card key={i}>
              <Image width={627} height={481} src={i} alt='' />
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}
