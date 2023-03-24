import Head from 'next/head'
import Image from 'next/image'
import { Button, ButtonAsLink } from '@/components/Button'
import Card from '@/components/Card'
import Link from 'next/link'

import heroDog from '@/../public/images/hero-dog.png'
import aboutCat from '@/../public/images/about-cat.png'
import videoPlaceholder from '@/../public/images/video-placeholder.png'
import ContactForm from '@/components/ContactForm'
import { getAllProgramsData } from '@/lib/getProgramsData'
import { getAllHelpData, HelpData } from '@/lib/getHelpData'
import HelpSection from '@/components/HelpSection'
import Logo from '@/components/Logo'

type ProgramsData = ReturnType<typeof getAllProgramsData>

type Props = {
  programsData: ProgramsData
  helpData: HelpData[]
}

export default function Home({ programsData, helpData }: Props) {
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
        <News />
        <Partners />
        <ContactForm />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const programsData = getAllProgramsData()
  const helpData = await getAllHelpData()
  return {
    props: {
      programsData,
      helpData,
    },
  }
}

function HeroSection() {
  return (
    <section className='grid-hero pt-5'>
      <div>
        <h1 className='flex flex-col items-center gap-4 text-center text-3xl md:text-4xl lg:gap-6 xl:text-5xl'>
          горячая линия
          <Logo width='562' height='60' />
          благотворительный фонд помощи животным
        </h1>
        <div className='flex flex-col items-center gap-14'>
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
      <div className='col-contain grid grid-cols-2 gap-9 md:grid-cols-4'>
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
              <h3 className='text-center text-xl font-extrabold uppercase lg:text-[28px]'>
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
    <section className='grid grid-cols-main gap-y-5 py-24'>
      <h2 className='col-contain text-center text-6xl'>О Фонде</h2>
      <div className='col-start-2 col-end-8 mt-14 text-2xl'>
        <p className='col-span-full text-3xl'>
          Потеряшки - благотворительный фонд помощи животным, в котором командой
          волонтеров, сообща оказывается комплексная помощь животным. Кошек и
          собак лечат, кастрируют, вакцинируют, чипируют и находят хозяина. У
          нас нет приюта и нет места куда можно привезти ставшего ненужным
          питомца, все животные проживают на передержках.
        </p>
        <div className='mt-16 grid grid-flow-col grid-cols-2 grid-rows-2 gap-y-10 gap-x-14'>
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
      <Image className='col-span-3 col-start-9' src={aboutCat} alt='' />
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
    i == values.length - 1 ? 'col-span-full w-1/2 justify-self-center' : ''

  return (
    <section className='grid grid-cols-main gap-y-32 bg-brand-200 py-24'>
      <h2 className='col-contain text-center text-6xl'>Наши ценности</h2>
      <div className='col-contain grid grid-cols-2 gap-20 gap-y-32'>
        {values.map((v, i) => (
          <div key={v.heading} className={contentCls(i)}>
            <h3 className='text-4xl'>{v.heading}</h3>
            <p className='mt-7 text-2xl'>{v.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className='grid grid-cols-main gap-y-8 pt-24'>
      <h2 className='col-contain text-center text-6xl'>Наша миссия</h2>
      <p className='col-span-6 col-start-4 text-4.5xl'>
        Наша миссия - сократить количество бездомных животных на улицах, изменив
        отношение людей к домашним животным.
      </p>
      <div className='col-span-full pt-20'>
        <Image src={videoPlaceholder} alt='' />
      </div>
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
    <section className='grid grid-cols-main pt-24 pb-14'>
      <div className='col-contain flex justify-between'>
        {items.map((s, i) => (
          <figure key={i} className='space-y-9 text-center'>
            <strong className='text-stroke text-[6.625rem] font-medium leading-none text-brand-200'>
              {s.value}
            </strong>
            <figcaption className='max-w-[16ch] text-3xl'>
              {s.description}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function Team() {
  const items = [
    {
      photo: '/images/team/team-1.png',
      name: 'Здорнова Евгения',
      role: 'Учредитель фонда',
    },
    {
      photo: '/images/team/team-2.png',
      name: 'Гулецкая Ольга',
      role: 'Директор, учредитель фонда',
    },
    {
      photo: '/images/team/team-3.png',
      name: 'Ботяева Мария',
      role: 'Куратор передержки',
    },
    {
      photo: '/images/team/team-4.png',
      name: 'Татьяна Воробьева',
      role: 'Куратор породистых кошек',
    },
    {
      photo: '/images/team/team-5.png',
      name: 'Полина Полякова',
      role: 'Куратор щенков',
    },
    {
      photo: '/images/team/team-6.png',
      name: 'Криволапова Екатерина',
      role: 'Волонтер',
    },
  ]

  return (
    <section className='grid-cols-main grid gap-y-24 py-24'>
      <h2 className='col-contain text-center text-6xl'>Наша команда</h2>
      <div className='col-contain grid grid-cols-3 gap-x-20 gap-y-14'>
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
        <Button className='col-span-full mt-6 justify-self-center text-4xl'>
          Развернуть
        </Button>
      </div>
    </section>
  )
}

function Programs(props: { programs: ProgramsData }) {
  const items = props.programs

  return (
    <section id='programs' className='grid grid-cols-main gap-y-20 py-24'>
      <h2 className='col-contain text-center text-6xl'>Наши программы</h2>
      <div className='col-contain flex justify-around gap-20'>
        {items.map((i) => (
          <Link
            className='flex basis-[390px] text-center text-2xl font-extrabold uppercase'
            key={i.slug}
            href={`/programs/${i.slug}`}
          >
            <Card bgColor='bg-brand-200'>
              <Image src={i.imageUrl} width={340} height={345} alt='' />
              <p className='mt-5'>{i.shortTitle}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

function News() {
  const items = [
    {
      image: '/images/news-1.png',
      title: 'Новый год - время, когда все ждут чуда',
      subtitle:
        'Для наших подопечных заботливые хозяева - не чудо, а необходимость. И именно вы можете ими стать!',
      url: '1',
    },
    {
      image: '/images/news-2.png',
      title: 'Новый год - время, когда все ждут чуда',
      subtitle:
        'Для наших подопечных заботливые хозяева - не чудо, а необходимость. И именно вы можете ими стать!',
      url: '2',
    },
    {
      image: '/images/news-3.png',
      title: 'Новый год - время, когда все ждут чуда',
      subtitle:
        'Для наших подопечных заботливые хозяева - не чудо, а необходимость. И именно вы можете ими стать!',
      url: '3',
    },
  ]

  return (
    <section className='grid grid-cols-main gap-y-20 bg-brand-200 py-24'>
      <h2 className='col-contain text-center text-6xl'>Новости</h2>
      <div className='col-contain flex justify-between gap-20'>
        {items.map((i) => (
          <Link
            className='basis-[370px] text-3xl'
            key={i.url}
            href={`news/${i.url}`}
          >
            <Card className='flex flex-col gap-5'>
              <Image src={i.image} width={320} height={345} alt='' />
              <h3>{i.title}</h3>
              <p className='font-light'>{i.subtitle}</p>
            </Card>
          </Link>
        ))}
      </div>
      <ButtonAsLink
        href='/news'
        className='col-span-full justify-self-center text-4xl'
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
    <section className='grid grid-cols-main gap-y-28 py-24'>
      <h2 className='col-contain text-center text-6xl'>Партнеры</h2>
      <div className='col-contain grid grid-cols-3 place-content-between place-items-center gap-y-20'>
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
        className='col-span-full justify-self-center text-4xl'
      >
        Стать партнером
      </ButtonAsLink>
    </section>
  )
}
