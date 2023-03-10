import Card from '@/components/Card'
import * as Collapsible from '@radix-ui/react-collapsible'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import animalList from '../../data/animals/cats.json'

export default function Animals() {
  return (
    <>
      <Head>
        <title>Наши животные | Потеряшки</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid grid-cols-main bg-brand-200 py-28'>
        <div className='col-contain'>
          <h1 className='mb-14 text-center text-6xl'>Наши животные</h1>
          <Filter />
          <ul className='mt-10 grid grid-cols-3 gap-x-11 gap-y-14'>
            {animalList.map((a) => (
              <li key={a.id}>
                <Link href={`/animals/${a.id}`}>
                  <AnimalCard animal={a} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

function Filter() {
  const [open, setOpen] = useState(true)

  const filters = {
    Питомец: ['Собака', 'Кошка'],
    Пол: ['Мальчик', 'Девочка'],
    Возраст: ['до 6 мес.', '6-12 мес.', '1-5 лет', '5-10 лет', 'от 10 лет'],
    Окрас: ['Черный', 'Белый', 'Рыжий', 'Двухцветный', 'Трехцветный'],
    Шерсть: ['Короткая', 'Длинная'],
  }

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className='flex items-center justify-between'>
        <Collapsible.Trigger asChild>
          <button className='flex items-center gap-2 text-2xl font-thin'>
            {open ? 'Свернуть фильтр' : 'Показать фильтр'}
            <svg
              className='-mb-[2px] stroke-current'
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M22.5 18.75L15 11.25L7.5 18.75'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className='space-y-5 py-10'>
        {Object.entries(filters).map(([key, options]) => (
          <div className='flex items-center text-xl' key={key}>
            <span className='basis-[148px]'>{key}</span>
            <div className='flex gap-5'>
              {options.map((o) => (
                <div key={o}>
                  <input
                    className='peer sr-only'
                    type='checkbox'
                    id={`filter-${o}`}
                  />
                  <label
                    htmlFor={`filter-${o}`}
                    className='cursor-pointer select-none rounded border border-black bg-white px-6 py-0.5 font-light outline-offset-2 peer-checked:bg-brand-300 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-0 peer-focus-visible:outline-highlight'
                  >
                    {o}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

type Animal = (typeof animalList)[number]

function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <Card className='relative flex flex-col text-center text-3xl'>
      <Image height={464} width={463} src={animal.image} alt={animal.name} />
      <h2 className='mt-4'>{animal.name}</h2>
      <p className='mt-2 font-light'>
        {animal.gender}, {animal.age}
      </p>
    </Card>
  )
}
