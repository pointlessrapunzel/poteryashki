import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/logo.svg'

export default function Footer() {
  return (
    <footer className='grid-cols-main grid py-16 text-xl 2xl:text-3xl'>
      <div className='col-contain flex flex-wrap justify-between gap-8'>
        <div className='max-w-[30ch]'>
          <Link className='block h-[43px] w-auto max-w-[407px]' href='/'>
            <Image src={Logo} alt='Потеряшки' />
          </Link>
          <p className='mt-20'>
            Благотворительный фонд помощи животным «Горячая линия «Потеряшки»
          </p>
          <address className='mt-9 not-italic'>
            62500, Тюменская область, г. Тюмень, ул. Орджоникидзе, 62/3а
          </address>
          <p className='mt-9'>
            ИНН 7204133072
            <br />
            КПП 720301001
            <br />
            ОГРН 1097200000105
          </p>
        </div>
        <div>
          <h3 className='text-4.5xl'>Контакты</h3>
          <address className='mt-10 space-y-4 not-italic'>
            <a className='block' href='tel:+7(904)494-55-66'>
              +7 (904) 494-55-66
            </a>
            <a className='block' href='mailto:help-for-pets@bk.ru'>
              help-for-pets@bk.ru
            </a>
          </address>
        </div>
        <div className='flex flex-col gap-8 lg:items-end'>
          <div>
            <h3 className='text-4.5xl'>Соц. сети</h3>
            <ul className='mt-10 space-y-4'>
              <li>
                <a href='#'>Вконтакте</a>
              </li>
              <li>
                <a href='#'>Телеграм</a>
              </li>
              <li>
                <a href='#'>Youtube</a>
              </li>
            </ul>
          </div>
          <ul className='mt-auto space-y-4 lg:text-right'>
            <li>
              <a href='#'>Карта сайта</a>
            </li>
            <li>
              <a href='#'>Наш брендбук</a>
            </li>
            <li>
              <a href='#'>Политика конфиденциальности</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
