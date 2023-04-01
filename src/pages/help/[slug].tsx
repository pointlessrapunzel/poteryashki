import { ButtonAsLink } from '@/components/Button'
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
  const callToAction = () => {
    if (helpData.slug == 'temp-foster') return <TempFosterCTA />
    else if (helpData.slug == 'promote')
      return (
        <ButtonAsLink className='mx-auto max-w-max' href='#vk'>
          Перейти в группу ВК
        </ButtonAsLink>
      )
    else
      return (
        <ContactForm
          heading={<h2 className='text-4xl lg:text-4.5xl'>Напишите нам</h2>}
        />
      )
  }

  return (
    <>
      <Head>
        <title>{`${helpData.title} | Потеряшки`}</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid-cols-main grid grid-flow-dense justify-center gap-y-16 bg-brand-200 py-24'>
        <div className='col-contain text-xl font-light'>
          <Link href='/'>Главная</Link> -{' '}
          <Link href='/#help'>Как нам помочь</Link> - {helpData.title}
        </div>
        <div className='col-contain sm:col-end-7'>
          <h1 className='text-4xl lg:text-6xl'>{helpData.title}</h1>
          <div
            className='md-content mt-10 space-y-4 text-lg lg:mt-16 lg:space-y-10 lg:text-3xl'
            dangerouslySetInnerHTML={{ __html: helpData.contentHtml }}
          />
        </div>
        <div className='col-contain col-start-2 mt-24 xl:col-end-7'>
          {callToAction()}
        </div>
        <div className='col-contain flex flex-col gap-16 sm:col-start-8 sm:col-end-12'>
          {helpData?.images
            ? helpData.images.map((i) => (
                <Card key={i.src}>
                  <Image
                    className='aspect-[11/8] object-cover'
                    width={627}
                    height={481}
                    src={i.src}
                    alt=''
                  />
                </Card>
              ))
            : null}
        </div>
      </main>
      <HelpSection heading='Как нам ещё помочь' helpData={helpDataLinks} />
    </>
  )
}

function TempFosterCTA() {
  return (
    <div className='mx-auto flex w-[314px] flex-col items-stretch gap-14'>
      <ButtonAsLink href='/animals?cats'>Взять кошку</ButtonAsLink>
      <ButtonAsLink href='/animals?dogs'>Взять собаку</ButtonAsLink>
    </div>
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
