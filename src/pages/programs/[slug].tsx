import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'
import { getAllProgramSlugs, getProgramData } from '@/lib/getProgramsData'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  programData: ReturnType<typeof getProgramData>
}

export default function Program({ programData }: Props) {
  return (
    <>
      <Head>
        <title>{`${programData.title} | Потеряшки`}</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid-cols-main grid grid-flow-dense justify-center gap-y-16 bg-brand-200 py-24'>
        <div className='col-contain text-xl font-light'>
          <Link href='/'>Главная</Link> -{' '}
          <Link href='/#programs'>Программы</Link> - {programData.title}
        </div>
        <div className='col-contain sm:col-start-2 sm:col-end-7'>
          <h1 className='text-4xl lg:text-6xl'>{programData.title}</h1>
          <div
            className='md-content mt-10 space-y-4 text-lg lg:mt-16 lg:space-y-10 lg:text-3xl'
            dangerouslySetInnerHTML={{ __html: programData.contentHtml }}
          />
        </div>
        <ContactForm
          containerClassNames='col-contain col-start-2 xl:col-end-7'
          heading={
            <h2 className='text-4xl lg:text-4.5xl 2xl:text-5.9xl'>
              Напишите нам
            </h2>
          }
        />
        <div className='col-contain flex flex-col gap-16 sm:col-span-4 sm:col-start-8 xl:row-span-2'>
          {programData?.images
            ? programData.images.map((i) => (
                <Card key={i}>
                  <Image
                    className='aspect-[11/8] object-cover'
                    width={627}
                    height={481}
                    src={i}
                    alt=''
                  />
                </Card>
              ))
            : null}
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: getAllProgramSlugs(),
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

  return {
    props: {
      programData: getProgramData(params.slug),
    },
  }
}
