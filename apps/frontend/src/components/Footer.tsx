import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/logo.svg'

export default function Footer() {
  return (
    <footer className='mx-auto grid max-w-[var(--max-container-width)] justify-center gap-8 px-8 py-[4.375rem] text-xl leading-tight md:grid-cols-[2fr_1fr] md:justify-normal lg:grid-cols-[2fr_1fr_1.5fr] 2xl:px-0 2xl:text-[2rem]'>
      <div className='row-span-2 max-w-[30ch] 2xl:row-auto'>
        <Link className='block h-[43px] w-auto max-w-[407px]' href='/'>
          <Image src={Logo} alt='Потеряшки' />
        </Link>
        <p className='mt-8 max-w-[25ch] sm:mt-22'>
          Благотворительный фонд помощи животным
          <br />
          «Горячая линия «Потеряшки»
        </p>
        <address className='mt-7 not-italic'>
          62500, Тюменская область, г. Тюмень, ул. Орджоникидзе, 62/3а
        </address>
        <p className='mt-7'>
          ИНН 7204133072
          <br />
          КПП 720301001
          <br />
          ОГРН 1097200000105
        </p>
      </div>
      <div className='md:justify-self-end 2xl:justify-self-center'>
        <h3 className='text-4.5xl'>Контакты</h3>
        <address className='mt-4 space-y-3 not-italic md:mt-9'>
          <a
            className='block transition duration-300 ease-in-out'
            href='tel:+7(904)494-55-66'
          >
            +7 (904) 494-55-66
          </a>
          <a
            className='block transition duration-300 ease-in-out'
            href='mailto:help-for-pets@bk.ru'
          >
            help-for-pets@bk.ru
          </a>
        </address>
      </div>
      <div className='flex flex-col gap-8 md:items-end'>
        <div>
          <h3 className='text-4.5xl md:text-end'>Соц. сети</h3>
          <ul className='mt-4 flex gap-[1.875rem] md:mt-11'>
            <li>
              <a href='#'>
                <Image
                  src='/icons/socials/icon-vk.svg'
                  alt='Вконтакте'
                  title='Вконтакте'
                  width={50}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a href='#'>
                <Image
                  src='/icons/socials/icon-tg.svg'
                  alt='Телеграм'
                  title='Телеграм'
                  width={50}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a href='#'>
                <Image
                  src='/icons/socials/icon-yt.svg'
                  alt='Youtube'
                  title='Youtube'
                  width={50}
                  height={50}
                />
              </a>
            </li>
          </ul>
        </div>
        <ul className='mt-auto space-y-5 pb-1 md:text-right'>
          <li>
            <a className='transition duration-300 ease-in-out' href='#'>
              Карта сайта
            </a>
          </li>
          <li>
            <a className='transition duration-300 ease-in-out' href='#'>
              Наш брендбук
            </a>
          </li>
          <li>
            <a className='transition duration-300 ease-in-out' href='#'>
              Политика конфиденциальности
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
