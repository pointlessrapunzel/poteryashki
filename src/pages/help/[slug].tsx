import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'
import HelpSection from '@/components/HelpSection'
import {
  getAllHelpData,
  getAllHelpSlugs,
  getHelpData,
  HelpData,
} from '@/lib/getHelpData'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  helpData: HelpData
  helpDataLinks: HelpData[]
}

export default function HelpPage({ helpData, helpDataLinks }: Props) {
  return (
    <>
      <Head>
        <title>{`${helpData.title} | Потеряшки`}</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid grid-cols-main justify-center gap-y-16 bg-brand-200 py-24'>
        <div className='col-contain text-xl font-light'>
          <Link href='/'>Главная</Link> -{' '}
          <Link href='/#help'>Как нам помочь</Link> - {helpData.title}
        </div>
        <div className='col-span-5 col-start-2'>
          <h1 className='text-6xl'>{helpData.title}</h1>
          <div
            className='md-content mt-16 space-y-10 text-3xl'
            dangerouslySetInnerHTML={{ __html: helpData.contentHtml }}
          />
          <ContactForm />
        </div>
        <div className='col-span-4 col-start-8 flex flex-col gap-16'>
          {helpData?.images
            ? helpData.images.map((i) => (
                <Card key={i.src}>
                  <Image width={627} height={481} src={i.src} alt='' />
                </Card>
              ))
            : null}
        </div>
        <div className='col-contain'>
          <HelpSection heading='Как нам ещё помочь' helpData={helpDataLinks} />
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllHelpSlugs().filter(
    // filter out non generated layouts
    (p) => !['donate', 'donate-supplies'].includes(p.params.slug)
  )
  return {
    paths,
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

  const helpData = await getHelpData(params.slug)
  const helpDataLinks = await getAllHelpData()

  return {
    props: {
      helpData,
      helpDataLinks,
    },
  }
}
