import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/logo.svg'

export default function Footer() {
  return (
    <footer className='grid grid-cols-main py-16 text-xl 2xl:text-2xl'>
      <div className='col-contain flex justify-between'>
        <div className='max-w-[29ch]'>
          <Link className='block h-[43px] w-[407px]' href='/'>
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
          <h3 className='text-4xl'>Контакты</h3>
          <address className='mt-10 space-y-4 not-italic'>
            <a className='block' href='tel:+7(904)494-55-66'>
              +7 (904) 494-55-66
            </a>
            <a className='block' href='mailto:help-for-pets@bk.ru'>
              help-for-pets@bk.ru
            </a>
          </address>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-4xl'>Соц. сети</h3>
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
          <ul className='mt-auto space-y-4'>
            <li>
              <a href='#'>Карта сайта</a>
            </li>
            <li>
              <a href='#'>Разработка сайта</a>
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
