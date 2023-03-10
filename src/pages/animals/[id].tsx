import React from 'react'
import { ButtonAsLink } from '@/components/Button'
import Card from '@/components/Card'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import cats from '../../data/animals/cats.json'
import iconForward from '@/../public/icons/icon-arrow-forward.svg'
import iconBack from '@/../public/icons/icon-arrow-back.svg'
import * as Tooltip from '@radix-ui/react-tooltip'
import AdoptPetModal from '@/components/AdoptPetModal'
import ImageCarousel from '@/components/Carousel'

const animal = {
  name: 'Каскад',
  traits: [
    { key: 'Пол', value: 'Мальчик' },
    { key: 'Возраст', value: '1 год' },
    { key: 'Порода', value: 'Смешанная' },
    { key: 'Шерсть', value: 'Короткая' },
    { key: 'Окрас', value: 'Двухцветный' },
  ],
  moreTraits: {
    Стерилизован: true,
    Вакцинирован: true,
    'Обработан от паразитов': true,
    Чипирован: true,
  },
  photos: [
    '/images/animals/cats/Kaskad.jpg',
    '/images/animals/cats/Kaskad.jpg',
    '/images/animals/cats/Kaskad.jpg',
    '/images/animals/cats/Kaskad.jpg',
  ],
  description:
    'Каскад - это весёлый, игривый подросток, с которым точно не соскучишься, а ещё он любит людей и ласку. Спать предпочитает с человеком, но так, что бы не потревожить его сон. Совершенно не любит оставаться один, поэтому предпочитает всегда находится где-то рядом.',
}

const otherAnimals = cats.slice(0, 3)

type Animal = typeof animal

function AnimalCard({
  animal,
  className = '',
}: {
  animal: Animal
  className?: string
}) {
  const gender = animal.traits.find((t) => t.key == 'Пол')?.value
  const age = animal.traits.find((t) => t.key == 'Возраст')?.value

  return (
    <Card padding='p-10' className={`flex flex-col items-center ${className}`}>
      <ImageCarousel>
        {animal.photos.map((ph, idx) => (
          <Image
            key={`${ph}-${idx}`}
            width={930}
            height={696}
            src={ph}
            alt=''
          />
        ))}
      </ImageCarousel>
      <strong className='mt-4 text-4xl font-medium'>{animal.name}</strong>
      <p className='text-4xl font-light'>
        {gender}, {age}
      </p>
    </Card>
  )
}

export default function Animal() {
  return (
    <>
      <Head>
        <title>{`${animal.name} | Потеряшки`}</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid grid-cols-main bg-brand-200 py-28'>
        <div className='col-contain mb-12 text-xl font-light'>
          <Link href='/'>Главная</Link> -{' '}
          <Link href='/animals'>Наши животные</Link> - Каскад
        </div>
        <AnimalCard className='col-start-2 col-end-8' animal={animal} />
        <div className='col-span-3 col-start-9 flex flex-col justify-between'>
          <h1 className='text-6xl'>{animal.name}</h1>
          <ul className='flex flex-col gap-4 text-2xl font-light'>
            {animal.traits.map((t) => (
              <li key={t.key}>
                <strong className='font-medium'>{t.key}:</strong> {t.value}
              </li>
            ))}
          </ul>
          <h2 className='text-4xl'>Ещё обо мне:</h2>
          <ul className='flex flex-col gap-4 text-2xl font-light'>
            {Object.entries(animal.moreTraits).map(([k, v]) => (
              <li className='flex items-center gap-5' key={k}>
                <CheckboxIcon />
                {k}
              </li>
            ))}
          </ul>
          <p className='text-2xl'>
            Нажмите на кнопку ниже, мы свяжемся с вами и расскажем, как взять
            эту милаху к себе!
          </p>
          <div>
            <AdoptPetModal />
          </div>
        </div>
        <div className='col-start-2 col-end-8 mt-16 text-3xl leading-snug'>
          {animal.description}
        </div>
        <div className='col-span-3 col-start-9 mt-16'>
          <p className='text-2xl'>Не уверены в своих силах?</p>
          <Link
            className='mt-6 inline-flex border-spacing-0 items-baseline border-b-2 border-current text-3xl leading-[0.8]'
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
                <button className='mt-3 flex cursor-help items-center gap-1 text-xl'>
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
        <div className='col-contain pt-24'>
          <h2 className='text-center text-4xl'>Другие наши любимцы:</h2>
          <div className='mt-16 flex justify-center gap-16'>
            <button>
              <Image src={iconBack} alt='Назад' />
            </button>
            <div className='flex gap-10'>
              {otherAnimals.map((a) => (
                <Card className='text-center text-2xl' key={a.id}>
                  <Link href={`/animals/${a.id}`}>
                    <Image src={a.image} alt='' width={350} height={350} />
                    <h3 className='mt-4'>{a.name}</h3>
                    <p className='font-light'>
                      {a.gender}, {a.age}
                    </p>
                  </Link>
                </Card>
              ))}
            </div>
            <button>
              <Image src={iconForward} alt='Вперёд' />
            </button>
          </div>
          <div className='mt-24 flex justify-center'>
            <ButtonAsLink href='/animals'>Посмотреть всех</ButtonAsLink>
          </div>
        </div>
      </main>
    </>
  )
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
