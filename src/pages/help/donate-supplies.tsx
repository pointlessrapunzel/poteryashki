import { Button } from '@/components/Button'
import Card from '@/components/Card'
import HelpSection from '@/components/HelpSection'
import { getAllHelpData, getHelpData, HelpData } from '@/lib/getHelpData'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import suppliesItems from '@/data/supplies.json'

type Props = {
  helpData: HelpData
  helpDataLinks: HelpData[]
}

export default function SuppliesPage({ helpData, helpDataLinks }: Props) {
  return (
    <>
      <Head>
        <title>{`Передать вещи животным | Потеряшки`}</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid-cols-main grid justify-center gap-y-16 bg-brand-200 pt-24'>
        <div className='col-contain text-xl font-light'>
          <Link href='/'>Главная</Link> -{' '}
          <Link href='/#help'>Как нам помочь</Link> - Передать вещи животным
        </div>
        <div className='col-contain sm:col-span-6 sm:col-start-2 lg:col-span-5 lg:col-start-2'>
          <h1 className='text-4xl xl:text-6xl'>
            Эти вещи нужны нам <span className='text-highlight'>всегда</span>
          </h1>
          <Button className='mt-12'>Отправить вещи</Button>
          <div className='md-supplies-content mt-28 flex flex-col gap-8 text-xl md:flex-row xl:gap-16 xl:text-3xl'>
            {/* split into two columns */}
            <div className='flex basis-full flex-col gap-8 xl:gap-16'>
              {suppliesItems.slice(0, 2).map((g) => (
                <div key={g.category}>
                  <h2>{g.category}</h2>
                  <ul className='mt-8'>
                    {g.items.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className='flex basis-full flex-col gap-8 xl:gap-16'>
              {suppliesItems.slice(2).map((g) => (
                <div key={g.category}>
                  <h2>{g.category}</h2>
                  <ul className='mt-8'>
                    {g.items.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='col-contain flex flex-col gap-16 sm:col-start-9 sm:col-end-12 lg:col-start-8'>
          {helpData?.images
            ? helpData.images.map((i) => (
                <Card key={i.src}>
                  <Image
                    className='aspect-[11/8] object-cover'
                    width={627}
                    height={481}
                    src={i.src}
                    alt={i.label}
                  />
                  <p className='text-center text-lg font-light lg:text-2xl'>
                    {i.label}
                  </p>
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

export function getStaticProps() {
  const helpData = getHelpData('donate-supplies')
  const helpDataLinks = getAllHelpData()

  return {
    props: {
      helpData,
      helpDataLinks,
    },
  }
}
