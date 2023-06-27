import * as Collapsible from '@radix-ui/react-collapsible'
import Head from 'next/head'
import { MutableRefObject, useRef, useState } from 'react'
import animalList from '../../data/animals/cats.json'
import AnimalsList from '@/components/AnimalsList'
import {useIntersection} from '../../hook/useIntersection.js'
export default function Animals() {
  const [nowArray,setNowArray] = useState(animalList.slice(0,9));
  const lastElement = useRef<any>(null);
  const getNextNineEl = () =>{
    let result = nowArray;
    animalList.slice(nowArray.length, nowArray.length+9).map((a)=>{ result.push(a)})
    setNowArray([...result]);
  }
  useIntersection(lastElement,getNextNineEl);
  return (
    <>
      <Head>
        <title>Наши животные | Потеряшки</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid-cols-main grid bg-brand-200 py-28'>
        <div className='col-contain'>
          <h1 className='mb-14 text-center text-6xl'>Наши животные</h1>
          <Filter />
          <ul className='mt-10 grid gap-x-11 gap-y-14 sm:grid-cols-2 md:grid-cols-3'>
            <AnimalsList array={nowArray}/>
           
          </ul>
          <div ref={lastElement} style={{marginTop: "30px" ,height: 20}}/>
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
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className='space-y-10 py-10 sm:space-y-6'>
        {Object.entries(filters).map(([key, options]) => (
          <div className='flex items-start text-xl' key={key}>
            <span className='shrink-0 basis-[124px] sm:basis-[148px]'>
              {key}
            </span>
            <div className='flex flex-wrap gap-5'>
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