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

type ProgramsData = ReturnType<typeof getAllProgramsData>

type Props = {
  programsData: ProgramsData
}

export default function Home({ programsData }: Props) {
  console.log(programsData)
  return (
    <>
      <Head>
        <title>Потеряшки</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HeroSection />
        <AnimalsSection />
        <AboutFoundation />
        <OurValues />
        <Mission />
        <Stats />
        <Team />
        <Help />
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
  return {
    props: {
      programsData,
    },
  }
}

function HeroSection() {
  return (
    // 190px negative margin should equal last grid row
    // so that the dog picture goes under the next section
    <section className='-mb-[190px] grid grid-cols-main grid-rows-[121px_574px_150px_190px] pt-5'>
      <div className='col-start-2 col-end-6 row-start-2 space-y-20'>
        <h1 className='flex flex-col items-center gap-6 text-center text-5xl'>
          горячая линия
          {/* logo */}
          <svg
            width='562'
            height='60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M87.533 59.8c-18.946 0-27.06-8.219-27.127-27.485.064-16.423 10.023-26.628 25.991-26.628 19.116 0 27.273 8.22 27.273 27.484 0 16.177-10.26 26.63-26.137 26.63Zm-.996-37.77c-3.784 0-5.739 3.459-5.806 10.278.046 4.799.803 11.153 6.801 11.153 5.807 0 5.807-7.745 5.807-10.29 0-4.781-.705-11.14-6.802-11.14ZM228.438 56.817V8.665c0-.861.699-1.56 1.56-1.56h27.919c7.387 0 24.567 2.074 24.567 21.298 0 12.862-6.812 19.483-21.439 20.831-.912.085-1.848.127-2.778.127h-.001c-2.326 0-4.704-.263-7.065-.782l-3.498-.77.239 8.966a1.559 1.559 0 0 1-1.559 1.601h-16.385a1.56 1.56 0 0 1-1.559-1.56h-.001Zm19.265-22.565h6.243c2.12 0 8.567 0 8.567-5.85 0-4.425-3.579-6.003-6.928-6.003h-7.882v11.853ZM34.804 56.794l.488-34.395H18.761l.482 34.396a1.56 1.56 0 0 1-1.56 1.581H1.56A1.56 1.56 0 0 1 0 56.816V8.666c0-.86.698-1.56 1.56-1.56h50.927c.862 0 1.56.699 1.56 1.56v48.152a1.56 1.56 0 0 1-1.56 1.559H36.363a1.56 1.56 0 0 1-1.559-1.582ZM131.726 56.794l.487-34.395h-13.929a1.56 1.56 0 0 1-1.56-1.56V8.666c0-.861.698-1.56 1.56-1.56h46.015c.862 0 1.56.699 1.56 1.56V20.84c0 .86-.698 1.559-1.56 1.559h-13.831l.478 34.396a1.56 1.56 0 0 1-1.559 1.58h-16.102a1.56 1.56 0 0 1-1.56-1.581h.001ZM196.054 59.8c-18.947 0-27.059-8.219-27.127-27.485.063-16.423 10.023-26.628 25.992-26.628 18.284 0 26.423 7.423 27.211 24.82-.001 1.83.032 3.591.033 4.868a1.557 1.557 0 0 1-1.559 1.56h-30.912c.225 3.147 2.36 7.2 11.251 7.2 5.542 0 10.169-1.318 13.342-2.588a1.55 1.55 0 0 1 2.123 1.45V53.01c0 .566-.299 1.09-.796 1.361-4.231 2.306-11.462 5.428-19.558 5.428Zm-.241-37.77c-1.382 0-5.935 1.285-6.481 9.04l13.922-.015c-.468-5.535-2.972-9.025-7.441-9.025ZM310.914 7.118c-13.872 0-23.751 5.819-23.751 17.629 0 6.829 4.919 13.205 17.386 13.205 3.181 0 5.418.022 8.637-.453v1.587l-8.893.965a15.62 15.62 0 0 0-10.414 5.65l-8.974 10.99a1.04 1.04 0 0 0 .806 1.698h21.727c.534 0 1.031-.274 1.317-.726l11.291-17.85h1.275v17.016c0 .861.698 1.56 1.559 1.56h16.666a1.56 1.56 0 0 0 1.559-1.56V8.677a1.56 1.56 0 0 0-1.559-1.559h-28.633.001Zm10.407 23.833h-8.27c-3.996 0-6.021-1.645-6.021-4.27 0-2.766 1.475-4.27 4.382-4.27h9.909v8.54ZM463.465 34.638l-9.056-1.314v-.785l7.704-1.12a15.593 15.593 0 0 0 11.62-8.296l7.535-14.486a1.04 1.04 0 0 0-.922-1.519H461.8c-.625 0-1.189.373-1.434.947L450.48 31.19h-1.569l.477-22.48a1.559 1.559 0 0 0-1.559-1.592H431.52a1.56 1.56 0 0 0-1.559 1.56v48.151c0 .861.698 1.56 1.559 1.56h16.309a1.56 1.56 0 0 0 1.559-1.593l-.477-22.334h1.424l8.947 22.997a1.56 1.56 0 0 0 1.463.994l20.326-.125a1.04 1.04 0 0 0 .925-1.502l-6.806-13.695a15.594 15.594 0 0 0-11.725-8.492v-.001ZM402.117 8.7l.5 34.398h-9.507l.486-34.398a1.56 1.56 0 0 0-1.559-1.582h-13.014c-.87 0-1.572.712-1.559 1.583l.5 34.396h-9.507l.486-34.397a1.56 1.56 0 0 0-1.559-1.582H351.28a1.56 1.56 0 0 0-1.559 1.56v48.151c0 .861.697 1.56 1.559 1.56h68.501a1.56 1.56 0 0 0 1.559-1.56V8.678a1.56 1.56 0 0 0-1.559-1.56h-16.105a1.56 1.56 0 0 0-1.559 1.582ZM522.913 7.118c-.623 0-1.186.37-1.432.942l-14.696 34.043h-.758l.759-33.39a1.56 1.56 0 0 0-1.559-1.595h-16.111a1.56 1.56 0 0 0-1.559 1.56V56.83c0 .86.697 1.559 1.559 1.559h18.89c.622 0 1.185-.37 1.431-.942l14.501-33.607h.767l-.581 32.962a1.559 1.559 0 0 0 1.559 1.587h16.118a1.56 1.56 0 0 0 1.559-1.56V8.679c0-.861-.697-1.56-1.559-1.56h-18.888ZM554.807 1.467c4.282 0 5.726 1.458 5.726 5.78 0 3.47-2.024 5.544-5.414 5.544-4.237 0-5.671-1.46-5.687-5.773.014-3.528 1.973-5.551 5.375-5.551ZM554.814 0c-4.207 0-6.831 2.689-6.848 7.016.017 5.076 2.155 7.242 7.147 7.242 4.183 0 6.887-2.754 6.887-7.016C562 2.165 559.851 0 554.814 0Z'
              fill='#000'
            />
            <path
              d='M554.953 11.108c-2.132 0-3.399-1.399-3.476-3.837v-.268c.079-2.505 1.282-3.83 3.476-3.83 1.201 0 2.273.29 2.96.664l.043 1.789c-.586-.11-1.338-.334-2.245-.334-1.769 0-1.96 1.294-1.96 1.849 0 .555.191 1.847 1.96 1.847.907 0 1.659-.224 2.129-.413l.115 1.764c-.731.451-1.804.77-3.002.77v-.001Z'
              fill='#000'
            />
          </svg>
          {/* logo */}
          благотворительный фонд помощи животным
        </h1>
        <div className='flex flex-col items-center gap-14'>
          <ButtonAsLink className='text-4xl' href='/animals'>
            Найти друга
          </ButtonAsLink>
          <ButtonAsLink className='text-4xl' variant='outline' href='/#help'>
            Как помочь?
          </ButtonAsLink>
        </div>
      </div>
      <Image className='col-start-7 col-end-12' src={heroDog} alt='' />
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
    <section className='relative z-10 grid grid-cols-main bg-brand-200 py-24'>
      <h2 className='col-contain text-center text-6xl'>Наши животные</h2>
      <div className='col-contain mt-20 flex gap-9'>
        {links.map((l) => (
          <Link key={l.url} href={`/animals/${l.url}`}>
            <Card>
              <Image src={l.image} width={320} height={345} alt='' />
              <h3 className='mt-4 text-center text-2xl uppercase'>{l.label}</h3>
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
    <section className='grid grid-cols-main gap-y-24 py-24 pt-14'>
      <h2 className='col-contain text-center text-6xl'>Наша команда</h2>
      <div className='col-contain grid grid-cols-3 gap-x-24 gap-y-14'>
        {items.map((m) => (
          <Card
            key={m.name}
            bgColor='bg-brand-200'
            className='text-center text-2xl'
          >
            <Image width={463} height={464} src={m.photo} alt='' />
            <h3 className='mt-4'>{m.name}</h3>
            <p className='font-light'>{m.role}</p>
          </Card>
        ))}
        <Button className='col-span-full mt-5 justify-self-center text-4xl'>
          Развернуть
        </Button>
      </div>
    </section>
  )
}

function Help() {
  const items = [
    {
      icon: '/icons/icon-donation.png',
      text: 'Сделать пожертвование',
      url: 'donate',
    },
    {
      icon: '/icons/icon-donation.png',
      text: 'Сделать пожертвование',
      url: 'donate',
    },
    {
      icon: '/icons/icon-donation.png',
      text: 'Сделать пожертвование',
      url: 'donate',
    },
    {
      icon: '/icons/icon-donation.png',
      text: 'Сделать пожертвование',
      url: 'donate',
    },
    {
      icon: '/icons/icon-donation.png',
      text: 'Сделать пожертвование',
      url: 'donate',
    },
    {
      icon: '/icons/icon-donation.png',
      text: 'Сделать пожертвование',
      url: 'donate',
    },
    {
      icon: '/icons/icon-donation.png',
      text: 'Сделать пожертвование',
      url: 'donate',
    },
    {
      icon: '/icons/icon-donation.png',
      text: 'Сделать пожертвование',
      url: 'donate',
    },
  ]

  return (
    <section
      id='help'
      className='grid grid-cols-main gap-y-24 bg-brand-200 py-24'
    >
      <h2 className='col-contain text-center text-6xl'>Как нам помочь</h2>
      <div className='col-contain grid grid-cols-4 place-content-center place-items-center gap-x-32 gap-y-24'>
        {items.map((el) => (
          <Link key={el.url} href={el.url}>
            <Card className='flex h-[312px] w-[302px] flex-col items-center justify-center gap-8 text-center text-2xl font-extrabold uppercase'>
              <Image src={el.icon} width={122} height={122} alt='' />
              <p>{el.text}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

function Programs(props: { programs: ProgramsData }) {
  const items = props.programs

  return (
    <section className='grid grid-cols-main gap-y-20 py-24'>
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
        href='/news'
        className='col-span-full justify-self-center text-4xl'
      >
        Стать партнером
      </ButtonAsLink>
    </section>
  )
}
