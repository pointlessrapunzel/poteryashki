import Card from '@/components/Card'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const news = [
  {
    image: '/images/news-1.png',
    title: 'Новый год - время, когда все ждут чуда',
    subtitle:
      'Для наших подопечных заботливые хозяева - не чудо, а необходимость. И именно вы можете ими стать!',
    url: '1',
  },
  {
    image: '/images/news-2.png',
    title: 'Новый год - время, когда все ждут чуда',
    subtitle:
      'Для наших подопечных заботливые хозяева - не чудо, а необходимость. И именно вы можете ими стать!',
    url: '2',
  },
  {
    image: '/images/news-3.png',
    title: 'Новый год - время, когда все ждут чуда',
    subtitle:
      'Для наших подопечных заботливые хозяева - не чудо, а необходимость. И именно вы можете ими стать!',
    url: '3',
  },
  {
    image: '/images/news-1.png',
    title: 'Новый год - время, когда все ждут чуда',
    subtitle:
      'Для наших подопечных заботливые хозяева - не чудо, а необходимость. И именно вы можете ими стать!',
    url: '4',
  },
  {
    image: '/images/news-2.png',
    title: 'Новый год - время, когда все ждут чуда',
    subtitle:
      'Для наших подопечных заботливые хозяева - не чудо, а необходимость. И именно вы можете ими стать!',
    url: '5',
  },
  {
    image: '/images/news-3.png',
    title: 'Новый год - время, когда все ждут чуда',
    subtitle:
      'Для наших подопечных заботливые хозяева - не чудо, а необходимость. И именно вы можете ими стать!',
    url: '6',
  },
]

export default function News() {
  return (
    <>
      <Head>
        <title>Новости | Потеряшки</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid-cols-main grid justify-center gap-y-20 bg-brand-200 py-24'>
        <h1 className='col-contain text-center text-6xl'>Новости</h1>
        <ul className='col-contain flex flex-wrap justify-around gap-20'>
          {news.map((i) => (
            <li className='basis-[370px] text-2xl md:text-3xl' key={i.url}>
              <Link href={`news/${i.url}`}>
                <Card>
                  <Image
                    src={i.image}
                    width={320}
                    height={345}
                    alt=''
                    className='max-w-full'
                  />
                  <h2>{i.title}</h2>
                  <p className='font-light'>{i.subtitle}</p>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
