import Card from '@/components/Card'
import { getAllNewsLinks } from '@/lib/getNewsData'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  news: ReturnType<typeof getAllNewsLinks>
}

export default function News({ news }: Props) {
  return (
    <>
      <Head>
        <title>Новости | Потеряшки</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid-cols-main grid justify-center gap-y-20 bg-brand-200 py-24'>
        <h1 className='col-contain text-center text-6xl'>Новости</h1>
        <ul className='col-contain grid justify-items-center gap-20 md:grid-cols-2 lg:grid-cols-3'>
          {news.map((i) => (
            <li
              className='flex w-[300px] text-2xl sm:w-[350px] xl:w-[370px] xl:text-3xl'
              key={i.slug}
            >
              <Link href={`news/${i.slug}`}>
                <Card className='h-full'>
                  <Image
                    src={i.mainImage}
                    width={320}
                    height={345}
                    alt=''
                    className='aspect-[320/345] max-w-full object-cover'
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

export async function getStaticProps() {
  return {
    props: { news: getAllNewsLinks() },
  }
}
