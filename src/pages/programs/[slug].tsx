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
      <main className='grid-cols-main grid justify-center gap-y-16 bg-brand-200 py-24'>
        <div className='col-contain text-xl font-light'>
          <Link href='/'>Главная</Link> -{' '}
          <Link href='/#programs'>Программы</Link> - {programData.title}
        </div>
        <div className='col-span-5 col-start-2'>
          <h1 className='text-6xl'>{programData.title}</h1>
          <div
            className='md-content mt-16 space-y-10 text-3xl'
            dangerouslySetInnerHTML={{ __html: programData.contentHtml }}
          />
          <ContactForm />
        </div>
        <div className='col-span-4 col-start-8 flex flex-col gap-16'>
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
  const paths = getAllProgramSlugs()
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

  const programData = await getProgramData(params.slug)

  return {
    props: {
      programData,
    },
  }
}
