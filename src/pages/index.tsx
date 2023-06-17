import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Button, ButtonAsLink } from '@/components/Button'
import Card from '@/components/Card'
import Link from 'next/link'

import heroDog from '@/../public/images/hero-dog.png'
import aboutCat from '@/../public/images/about-cat.png'
import { ContactFormSection } from '@/components/ContactForm'
import { getAllProgramsData } from '@/lib/getProgramsData'
import { getAllHelpData, HelpData } from '@/lib/getHelpData'
import { getNewsLinksForHomepage } from '@/lib/getNewsData'
import HelpSection from '@/components/HelpSection'
import Logo from '@/components/Logo'
import teamJson from '@/data/team.json'
import { matchesMdMq } from '@/styles/theme'

type ProgramsData = ReturnType<typeof getAllProgramsData>
type NewsData = ReturnType<typeof getNewsLinksForHomepage>

type Props = {
  programsData: ProgramsData
  helpData: HelpData[]
  newsData: NewsData
}

export default function Home({ programsData, helpData, newsData }: Props) {
  return (
    <>
      <Head>
        <title>Потеряшки</title>
        <meta name='description' content='' />
      </Head>
      <main>
        <HeroSection />
        <AnimalsSection />
        <AboutFoundation />
        <OurValues />
        <Mission />
        <Stats />
        <Team />
        <HelpSection helpData={helpData} />
        <Programs programs={programsData} />
        <News news={newsData} />
        <Partners />
        <ContactFormSection />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const programsData = getAllProgramsData()
  const helpData = getAllHelpData()
  const newsData = getNewsLinksForHomepage()

  return {
    props: {
      programsData,
      helpData,
      newsData,
    },
  }
}

function HeroSection() {
  return (
    <section className='grid-hero overflow-hidden pt-5'>
      <div>
        <h1 className='flex flex-col items-center gap-4 text-center text-3xl md:text-4xl lg:gap-6 xl:text-5xl'>
          горячая линия
          <Logo width='562' height='60' />
          благотворительный фонд помощи животным
        </h1>
        <div className='flex min-w-max flex-col items-center gap-14'>
          <ButtonAsLink href='/animals'>Найти друга</ButtonAsLink>
          <ButtonAsLink variant='outline' href='/#help'>
            Как помочь?
          </ButtonAsLink>
        </div>
      </div>
      <Image className='grid-hero__image' src={heroDog} alt='' />
    </section>
  )
}

function AnimalsSection() {
  const links = [
    { image: '/images/our-pets-dog.png', label: 'Собаки', url: '?dogs' },
    { image: '/images/our-pets-puppy.png', label: 'Щенки', url: '?puppies' },
    { image: '/images/our-pets-cat.png', label: 'Кошки', url: '?cats' },
    { image: '/images/our-pets-kitten.png', label: 'Котята', url: '?kittens' },
  ]

  return (
    // relative and z-index needed for the hero dog image to stay behind
    <section className='grid-cols-main relative grid gap-y-20 bg-brand-200 py-20'>
      <h2 className='col-contain text-center text-4xl lg:text-6xl'>
        Наши животные
      </h2>
      <div className='col-contain grid grid-cols-2 gap-4 sm:gap-9 md:grid-cols-4'>
        {links.map((l) => (
          <Link key={l.url} href={`/animals/${l.url}`}>
            <Card>
              <Image
                className='w-full object-cover'
                src={l.image}
                width={320}
                height={345}
                alt=''
              />
              <h3 className='text-center text-lg font-extrabold uppercase sm:text-xl lg:text-[28px]'>
                {l.label}
              </h3>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

function AboutFoundation() {
  return (
    <section className='grid-cols-main grid gap-y-8 overflow-hidden py-20 lg:gap-y-20'>
      <h2 className='col-contain row-start-1 text-center text-4xl lg:text-6xl'>
        О Фонде
      </h2>
      <div className='z-10 col-contain row-start-2 text-base lg:col-start-2 lg:col-end-8 lg:text-2xl'>
        <p className='text-lg sm:w-5/6 lg:w-full lg:text-3xl'>
          Потеряшки - благотворительный фонд помощи животным, в котором командой
          волонтеров, сообща оказывается комплексная помощь животным. Кошек и
          собак лечат, кастрируют, вакцинируют, чипируют и находят хозяина. У
          нас нет приюта и нет места куда можно привезти ставшего ненужным
          питомца, все животные проживают на передержках.
        </p>
        <div className='mt-8 grid gap-y-6 gap-x-16 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 sm:gap-y-10 lg:mt-16'>
          <p>
            Благотворительный фонд помощи животным «Горячая линия «Потеряшки»
            это не «приют» и не «скорая помощь», готовая принять найденного или
            ставшее ненужным животное.
          </p>
          <p>
            «Потеряшки» - это слаженная работа большой команды кураторов,
            волонтеров, неравнодушных людей, которые объединяя усилия помогают
            животным.{' '}
          </p>
          <p>
            С 2009 года благотворительный фонд помощи животным «Горячая линия
            «Потеряшки» помогает животным попавшим в беду.
          </p>
          <p>
            Вместе мы уже помогли многим, с вашей помощью мы сможем еще больше!{' '}
          </p>
        </div>
      </div>
      <Image
        className='relative bottom-16 col-span-3 col-start-10 row-start-2 translate-x-12 -translate-y-1/4 -rotate-45 lg:col-start-9 lg:transform-none lg:self-center'
        src={aboutCat}
        alt=''
      />
    </section>
  )
}

function OurValues() {
  const values = [
    {
      heading: 'Открытость',
      content:
        'Мы стремимся к прозрачности своей деятельности. Следуем принятым правилам. Рассказываем о ходе и результатах своей работы. Мы открыты для тех, кто хочет стать частью команды. Мы публикуем отчеты за каждый год, которые вы можете найти на нашем сайте. ',
    },
    {
      heading: 'Ответственность',
      content:
        'Мы без преувеличения несем ответственность за жизни. Мы руководствуемся назначениями ветеринарных врачей, консультируемся с лучшими специалистами, руководствуемся принципами доказательной медицины. Мы руководствуемся принципом «не навреди». ',
    },
    {
      heading: 'Системность',
      content:
        'Более 13 лет наша основная цель – снижение численности бездомных животных. По этой причине, все животные Фонда передаются новому хозяину кастрированными, вакцинированными, готовыми к чипированию. Это касается как беспородных, так и породистых животных. ',
    },
  ]

  // returns class for the last grid child,
  // which should be half-width and centered on the grid
  const contentCls = (i: number) =>
    i == values.length - 1 ? 'col-span-full sm:w-1/2 justify-self-center' : ''

  return (
    <section className='grid-cols-main grid gap-y-16 bg-brand-200 py-20 lg:gap-y-32'>
      <h2 className='col-contain text-center text-4xl lg:text-6xl'>
        Наши ценности
      </h2>
      <div className='col-contain grid gap-8 sm:grid-cols-2 lg:gap-20 lg:gap-y-32'>
        {values.map((v, i) => (
          <div key={v.heading} className={contentCls(i)}>
            <h3 className='text-2xl lg:text-[2.625rem]'>{v.heading}</h3>
            <p className='mt-7 text-base lg:text-3xl'>{v.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className='grid-cols-main grid justify-items-center gap-y-10 pt-20'>
      <h2 className='col-contain text-center text-4xl lg:text-6xl'>
        Наша миссия
      </h2>
      <p className='col-contain flex max-w-[32ch] items-center text-2xl leading-none lg:text-[2.875rem]'>
        Наша миссия - сократить количество бездомных животных на улицах, изменив
        отношение людей к домашним животным.
      </p>
    </section>
  )
}

function Stats() {
  const items = [
    { value: '14 000', description: 'животных уже нашли свой дом' },
    { value: '13 лет', description: 'заботимся о животных' },
    { value: '250', description: 'питомцев под нашей опекой' },
  ]

  return (
    <section className='grid-cols-main grid pt-24 pb-6'>
      <div className='col-contain flex flex-col items-center justify-around gap-y-12 md:flex-row'>
        {items.map((s, i) => (
          <figure key={i} className='flex flex-col gap-4 text-center lg:gap-9'>
            <strong className='text-stroke grow text-6xl font-medium leading-none text-brand-200 lg:text-8xl xl:text-[6.625rem]'>
              {s.value}
            </strong>
            <figcaption className='max-w-[16ch] text-2xl lg:text-3xl'>
              {s.description}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function Team() {
  const [shown, setShown] = React.useState(false)
  let items = teamJson

  React.useEffect(() => {
    // always shown on screens smaller than md
    if (!matchesMdMq()) setShown(true)
  }, [])

  if (!shown) items = items.slice(0, 3)

  return (
    <section className='grid-cols-main grid gap-y-24 py-24'>
      <h2 className='col-contain text-center text-4xl lg:text-6xl'>
        Наша команда
      </h2>
      <div className='col-span-full grid auto-cols-[95%] grid-flow-col gap-x-5 gap-y-14 overflow-x-scroll overscroll-x-contain px-5 py-2 sm:auto-cols-[60%] md:col-contain md:grid-flow-row md:grid-cols-3 md:gap-x-8 md:overflow-visible md:p-0 lg:gap-x-20'>
        {items.map((m) => (
          <Card
            key={m.name}
            bgColor='bg-brand-200'
            className='text-center text-3xl'
          >
            <Image width={463} height={464} src={m.photo} alt='' />
            <h3>{m.name}</h3>
            <p className='font-light'>{m.role}</p>
          </Card>
        ))}
        <Button
          onClick={() => setShown(!shown)}
          className='col-span-full mt-6 hidden justify-self-center text-4xl md:block'
        >
          {shown ? 'Свернуть' : 'Развернуть'}
        </Button>
      </div>
    </section>
  )
}

function Programs(props: { programs: ProgramsData }) {
  const items = props.programs

  return (
    <section id='programs' className='grid-cols-main grid gap-y-20 py-20'>
      <h2 className='col-contain text-center text-4xl lg:text-6xl'>
        Наши программы
      </h2>
      <div className='col-contain flex flex-col items-center justify-around gap-8 lg:flex-row lg:gap-20'>
        {items.map((i) => (
          <Link
            className='flex h-full basis-[390px] text-center text-2xl font-extrabold uppercase'
            key={i.slug}
            href={`/programs/${i.slug}`}
          >
            <Card bgColor='bg-brand-200'>
              <Image
                className='basis-3/5 object-cover'
                src={i.imageUrl}
                width={340}
                height={345}
                alt=''
              />
              <p className='my-auto max-w-[20ch]'>{i.shortTitle}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

function News(props: { news: NewsData }) {
  return (
    <section className='grid-cols-main grid gap-y-20 bg-brand-200 py-20'>
      <h2 className='col-contain text-center text-4xl lg:text-6xl'>Новости</h2>
      <div className='col-contain flex flex-col justify-between gap-10 lg:flex-row lg:gap-20'>
        {props.news.map((i) => (
          <Link
            className='basis-[370px] text-2xl md:text-3xl'
            key={i.slug}
            href={`news/${i.slug}`}
          >
            <div className='dashed-border flex h-full flex-col gap-3 rounded bg-neutral-100 p-4 sm:flex-row sm:gap-5 lg:flex-col lg:p-6'>
              <Image
                className='aspect-[320/345] max-w-full object-cover'
                src={i.mainImage}
                width={320}
                height={345}
                alt=''
              />
              <div className='flex flex-col gap-3'>
                <h3 className='w-full'>{i.title}</h3>
                <p className='col-span-full font-light'>{i.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ButtonAsLink
        href='/news'
        fontSize='text-3xl lg:text-4xl'
        className='col-span-full justify-self-center'
      >
        Читать ещё
      </ButtonAsLink>
    </section>
  )
}

function Partners() {
  const partner = {
    name: 'Потеряшки',
    logo: '/logo.svg',
    url: '#',
  }

  const partners = Array(6).fill(partner)

  return (
    <section className='grid-cols-main grid gap-y-24 py-20'>
      <h2 className='col-contain text-center text-4xl lg:text-6xl'>Партнеры</h2>
      <div className='col-contain grid grid-cols-2 place-content-between place-items-center gap-10 gap-y-12 md:gap-20 lg:grid-cols-3'>
        {partners.map((p, i) => (
          <div key={`${p.name}-${i}`}>
            <Link href={p.url}>
              <Image height={48} width={413} src={p.logo} alt={p.name} />
            </Link>
          </div>
        ))}
      </div>
      <ButtonAsLink
        href='/help/partner'
        fontSize='text-3xl lg:text-4xl'
        className='col-span-full justify-self-center'
      >
        Стать партнером
      </ButtonAsLink>
    </section>
  )
}
