import Card from '@/components/Card'
import { getAllNewsSlugs, getNewsData, NewsData } from '@/lib/getNewsData'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  news: NewsData
}

export default function NewsPage({ news }: Props) {
  return (
    <>
      <Head>
        <title>{`${news.title} | Потеряшки`}</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid-cols-main grid justify-center gap-y-16 bg-brand-200 py-24'>
        <div className='col-contain text-xl font-light'>
          <Link href='/'>Главная</Link> - <Link href='/news'>Новости</Link> -{' '}
          {news.title}
        </div>
        <div className='col-contain sm:col-end-7'>
          <h1 className='text-4xl lg:text-6xl'>{news.title}</h1>
          <div
            className='md-content mt-10 space-y-4 text-lg lg:mt-16 lg:space-y-10 lg:text-3xl'
            dangerouslySetInnerHTML={{ __html: news.contentHtml }}
          ></div>
        </div>
        <div className='col-contain flex flex-col gap-16 sm:col-start-8 sm:col-end-12'>
          {news.sideImages?.map((img, i) => (
            <Card key={i}>
              <Image
                className='aspect-[11/8] object-cover'
                width={627}
                height={481}
                src={img.src}
                alt=''
              />
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: getAllNewsSlugs(),
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const params = context.params
  if (!params?.slug || typeof params?.slug !== 'string') {
    return {
      notFound: true,
    }
  }

  const news = getNewsData(params.slug)
  return {
    props: { news },
  }
}
