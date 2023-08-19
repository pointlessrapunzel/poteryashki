import AnimalFilter from '@/components/AnimalFilter'
import AnimalsList from '@/components/AnimalsList'
import { Animal, getAnimalsData } from '@/lib/animalsData'
import { filterAnimals, parseFiltersFromQueryParams } from '@/lib/filterAnimals'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import { useIntersection } from '@/hooks/useIntersection.js'

type Props = {
  animalList: Animal[]
}

const INIT_ITEM_COUNT = 9

export default function Animals({ animalList }: Props) {
  const [itemLimit, setItemLimit] = useState(INIT_ITEM_COUNT)
  const nowArray = animalList.slice(0, itemLimit)
  const lastElement = useRef<HTMLDivElement>(null)

  const getNextNineEl = () => {
    if (itemLimit < animalList.length) setItemLimit(itemLimit + INIT_ITEM_COUNT)
  }

  useIntersection(lastElement, getNextNineEl)

  return (
    <>
      <Head>
        <title>Наши животные | Потеряшки</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid-cols-main grid bg-brand-200 py-28'>
        <div className='col-contain'>
          <h1 className='mb-14 text-center text-6xl'>Наши животные</h1>
          <AnimalFilter />
          <ul className='mt-10 grid gap-x-11 gap-y-14 sm:grid-cols-2 md:grid-cols-3'>
            <AnimalsList animals={nowArray} />
          </ul>
          <div ref={lastElement} style={{ marginTop: '30px', height: 20 }} />
        </div>
      </main>
    </>
  )
}

export function getServerSideProps(
  ctx: GetServerSidePropsContext
): GetServerSidePropsResult<{ animalList: Animal[] }> {
  let animalList = getAnimalsData()

  if (Object.keys(ctx.query).length > 0) {
    const filters = parseFiltersFromQueryParams(ctx.query)
    animalList = filterAnimals(animalList, filters)
  }

  return {
    props: { animalList },
  }
}
