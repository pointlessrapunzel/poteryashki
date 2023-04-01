import { Button, ButtonAsLink } from '@/components/Button'
import Card from '@/components/Card'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import iconForward from '@/../public/icons/icon-arrow-forward.svg'
import iconBack from '@/../public/icons/icon-arrow-back.svg'
import * as Tooltip from '@radix-ui/react-tooltip'
import AdoptPetModal from '@/components/AdoptPetModal'
import ImageCarousel from '@/components/Carousel'

import {
  AnimalType,
  getAnimalData,
  getAnimalsPaths,
  getMoreAnimalsLinks,
} from '@/lib/getAnimalsData'

function AnimalCard({
  animal,
  className = '',
}: {
  animal: AnimalType
  className?: string
}) {
  const gender = animal.traits.find((t) => t.key == 'Пол')?.value
  const age = animal.traits.find((t) => t.key == 'Возраст')?.value

  return (
    <div
      className={`
      md:dashed-border flex flex-col items-center gap-3 rounded bg-neutral-100 p-0
      pb-4 text-4.5xl md:gap-5 md:p-10 ${className}`}
    >
      <ImageCarousel>
        {animal.photos.map((ph, idx) => (
          <Image
            className='aspect-[930/696] object-cover'
            key={`${ph}-${idx}`}
            width={930}
            height={696}
            src={ph}
            alt=''
          />
        ))}
      </ImageCarousel>
      <strong className='mt-4 font-medium'>{animal.name}</strong>
      <p className='font-light'>
        {gender}, {age}
      </p>
    </div>
  )
}

type Props = {
  animal: AnimalType
  moreAnimals: AnimalType[]
}

export default function Animal({ animal, moreAnimals }: Props) {
  return (
    <>
      <Head>
        <title>{`${animal.name} | Потеряшки`}</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid-cols-main grid gap-y-16 bg-brand-200 py-28 lg:gap-y-8'>
        <div className='col-contain text-xl font-light'>
          <Link href='/'>Главная</Link> -{' '}
          <Link href='/animals'>Наши животные</Link> - {animal.name}
        </div>
        <AnimalCard
          className='col-span-full row-start-2 self-start md:col-contain lg:col-start-2 lg:col-end-8 lg:row-end-4 xl:row-end-5'
          animal={animal}
        />
        <div className='col-contain flex flex-col gap-8 sm:col-span-5 sm:col-start-2 lg:col-span-3 lg:col-start-9'>
          <h1 className='text-6xl'>{animal.name}</h1>
          <ul className='flex flex-col gap-4 text-2xl font-light'>
            {animal.traits.map((t) => (
              <li key={t.key}>
                <strong className='font-medium'>{t.key}:</strong> {t.value}
              </li>
            ))}
          </ul>
        </div>
        <div className='col-contain flex flex-col gap-8 sm:col-span-5 sm:col-start-7 lg:col-span-3 lg:col-start-9'>
          <h2 className='text-4xl'>Ещё обо мне:</h2>
          <ul className='flex flex-col gap-4 text-2xl font-light'>
            {Object.entries(animal.moreTraits).map(([k, v]) => (
              <li className='flex items-center gap-5' key={k}>
                <div className='shrink-0'>
                  <CheckboxIcon />
                </div>
                {k}
              </li>
            ))}
          </ul>
        </div>
        <div className='col-contain flex flex-col justify-between gap-8 sm:col-span-5 sm:col-start-2 lg:col-span-3 lg:col-start-9'>
          <p className='text-2xl md:pr-4 lg:p-0'>
            Нажмите на кнопку ниже, мы свяжемся с вами и расскажем, как взять
            эту милаху к себе!
          </p>
          <AdoptPetModal
            trigger={
              <Button fontSize='text-2xl md:text-4xl'>Взять питомца</Button>
            }
          />
        </div>
        <div className='col-contain sm:col-span-5 sm:col-start-7 lg:col-span-3 lg:col-start-9 lg:pt-8'>
          <p className='text-xl md:text-2xl'>Не уверены в своих силах?</p>
          <Link
            className='mt-6 inline-flex border-spacing-0 items-baseline border-b-2 border-current text-2xl leading-[0.8] md:text-3xl'
            href='#'
          >
            Взять на передержку
            <Image
              width={24}
              height={25}
              src='/icons/icon-arrow-outward.svg'
              alt=''
            />
          </Link>
          <Tooltip.Provider>
            <Tooltip.Root delayDuration={0}>
              <Tooltip.Trigger asChild>
                <button className='mt-3 flex cursor-help items-center gap-1 text-lg sm:text-xl'>
                  Что это{' '}
                  <Image
                    width={24}
                    height={24}
                    src='/icons/icon-help.svg'
                    alt=''
                  />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side='bottom'
                sideOffset={4}
                align='start'
                className='flex w-[303px] flex-col gap-6 rounded bg-white px-5 py-4 font-normal'
              >
                <div>
                  <strong className='font-bold'>Что такое передержка?</strong>
                  <p>
                    Это временный дом. Питомец живет у вас, пока мы ищем ему
                    постоянных хозяев.
                  </p>
                </div>
                <div>
                  <strong className='font-bold'>Надолго ли это? </strong>
                  <p>Минимум - 4 недели. Но можно и на больший срок.</p>
                </div>
                <div>
                  <strong className='font-bold'>Что нужно от меня?</strong>
                  <p>Только бережный уход и забота.</p>
                </div>
                <div>
                  <strong className='font-bold'>А чем кормить?</strong>
                  <p>Все предоставим мы.</p>
                </div>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
        <div className='col-contain text-xl lg:col-start-2 lg:col-end-8 lg:row-span-2 lg:row-start-4 lg:pt-8 lg:text-3xl xl:row-start-5'>
          {animal.description}
        </div>
        <div className='col-span-full pt-16 md:col-contain'>
          <h2 className='text-center text-4xl'>Другие наши любимцы:</h2>
          <div className='mt-16 flex justify-center gap-16'>
            <button className='hidden md:block'>
              <Image src={iconBack} alt='Назад' />
            </button>
            <div className='hide-scrollbar flex gap-10 overflow-x-scroll px-4'>
              {moreAnimals.map((a) => (
                <Card className='text-center text-2xl' key={a.id}>
                  <Link href={`/animals/${a.id}`}>
                    <Image
                      className='aspect-square object-cover'
                      src={a.photos[0]}
                      alt=''
                      width={350}
                      height={350}
                    />
                    <h3 className='mt-4'>{a.name}</h3>
                    <p className='font-light'>
                      {a.gender}, {a.age}
                    </p>
                  </Link>
                </Card>
              ))}
            </div>
            <button className='hidden md:block'>
              <Image src={iconForward} alt='Вперёд' />
            </button>
          </div>
          <div className='mt-24 flex justify-center'>
            <ButtonAsLink fontSize='text-2xl sm:text-4xl' href='/animals'>
              Посмотреть всех
            </ButtonAsLink>
          </div>
        </div>
      </main>
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: getAnimalsPaths(),
    fallback: false,
  }
}

export function getStaticProps(context: GetStaticPropsContext) {
  const params = context.params
  if (!params?.id || typeof params?.id !== 'string') {
    return {
      notFound: true,
    }
  }

  const animalData = getAnimalData(params.id)
  return {
    props: {
      animal: animalData,
      moreAnimals: getMoreAnimalsLinks(+params.id),
    },
  }
}

function CheckboxIcon() {
  return (
    <svg width='35' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='1'
        y='1'
        width='30'
        height='30'
        rx='4'
        fill='#F1F1F1'
        stroke='#000'
        strokeWidth='2'
      />
      <path
        d='M16.141 25 6 13.624l2.535-2.844 7.606 8.532L32.465 1 35 3.844 16.141 25Z'
        fill='#1C1B1F'
      />
    </svg>
  )
}
