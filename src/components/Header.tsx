import Link from 'next/link'
import { ButtonAsLink } from './Button'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Logo from './Logo'

type Props = {
  children: React.ReactNode
  href: string
}

const navItems = [
  {
    label: 'Наши животные',
    url: '/animals',
    links: [
      { label: 'Кошки', url: '/animals?cats' },
      { label: 'Котята', url: '/animals?kittens' },
      { label: 'Собаки', url: '/animals?dogs' },
      { label: 'Щенки', url: '/animals?puppies' },
    ],
  },
  {
    label: 'Как помочь',
    url: '/#help',
    links: [
      { label: 'Пожертвовать', url: '/help/donate' },
      { label: 'Взять на передержку', url: '/help/temp-foster' },
      { label: 'Помочь транспортом', url: '/help/transport' },
      { label: 'Пополнить баланс ГЛ', url: '/help/hotline' },
      { label: 'Передать вещи', url: '/help/donate-supplies' },
      { label: 'Стать партнером', url: '/help/partner' },
      { label: 'Стать волонтером', url: '/help/volunteer' },
    ],
  },
  { label: 'Новости', url: '/news' },
  { label: 'Отчеты', url: '/reports' },
]

type NavItem = (typeof navItems)[number]

function NavLink({ children, href }: Props) {
  return (
    <NavigationMenu.Link asChild>
      <Link className='text-black hover:text-brand-400' href={href}>
        {children}
      </Link>
    </NavigationMenu.Link>
  )
}

function NavItem({ item }: { item: NavItem }) {
  const { label, links, url } = item

  return (
    <NavigationMenu.Item className='relative z-20 w-max transition-colors duration-100 hover:text-brand-400'>
      {!links ? (
        <NavLink href={url}>{label}</NavLink>
      ) : (
        <>
          <NavigationMenu.Trigger>
            <NavLink href={url}>{label}</NavLink>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='absolute top-12 w-full min-w-max rounded bg-brand-200 px-6 py-6 text-xl leading-none shadow'>
            <ul className='flex flex-col gap-6'>
              {links.map((l) => (
                <li key={l.label}>
                  <NavLink href={l.url}>{l.label}</NavLink>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </>
      )}
    </NavigationMenu.Item>
  )
}

export default function Header() {
  return (
    <header className='grid-cols-main z-20 grid bg-neutral-100 py-6 text-xs sm:text-lg lg:h-16 xl:h-[93px] xl:py-0 xl:text-xl 2xl:text-[27px]'>
      <div className='col-contain flex flex-col items-center justify-between gap-4 lg:flex-row xl:gap-9'>
        <div className='shrink-1 mb-[6px] min-w-[200px]'>
          <Link href={'/'}>
            <Logo width='291' height='31' />
          </Link>
        </div>
        <NavigationMenu.Root>
          <NavigationMenu.List className='flex gap-7'>
            {navItems.map((i) => (
              <NavItem key={i.label} item={i} />
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <a
          className='hidden min-w-max text-gray-900 lg:inline xl:ml-auto'
          href='tel:+7(904)494-55-66'
        >
          +7 (904) 494-55-66
        </a>
        <ButtonAsLink
          href='/help/donate'
          fontSize='font-inherit'
          className='hidden h-8 xl:flex xl:h-full'
        >
          Пожертвовать
        </ButtonAsLink>
      </div>
    </header>
  )
}
