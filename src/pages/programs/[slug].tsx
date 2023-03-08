import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'
import { getAllProgramSlugs, getProgramData } from '@/lib/getProgramsData'
import { GetStaticPropsContext } from 'next'
import Image from 'next/image'

type Props = {
  programData: ReturnType<typeof getProgramData>
}

export default function Program({ programData }: Props) {
  return (
    <main className='grid grid-cols-main justify-center gap-y-24 bg-brand-200 py-24'>
      <div className='col-span-5 col-start-2'>
        <h1 className='text-6xl'>{programData.title}</h1>
        <div
          className='md-content mt-16 space-y-4 text-3xl'
          dangerouslySetInnerHTML={{ __html: programData.contentHtml }}
        />
        <ContactForm />
      </div>
      <div className='col-span-4 col-start-8 flex flex-col gap-16'>
        {[
          '/images/animals/cats/Igla.jpg',
          '/images/animals/cats/Kaskad.jpg',
          '/images/animals/cats/Olive.jpg',
        ].map((i) => (
          <Card key={i}>
            <Image width={627} height={481} src={i} alt='' />
          </Card>
        ))}
      </div>
    </main>
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
