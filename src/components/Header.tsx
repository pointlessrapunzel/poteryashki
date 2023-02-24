import Link from 'next/link'
import Button from './Button'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Image from 'next/image'

type Props = {
  children: React.ReactNode
  href: string
}

const navItems = [
  {
    label: 'Наши животные',
    url: 'animals',
    links: [
      { label: 'Кошки', url: 'animals/cats' },
      { label: 'Котята', url: 'animals/kittens' },
      { label: 'Собаки', url: 'animals/dogs' },
      { label: 'Щенки', url: 'animals/puppies' },
    ],
  },
  {
    label: 'Как помочь',
    url: 'help',
    links: [
      { label: 'Пожертвовать', url: 'donate' },
      { label: 'Взять на передержку', url: '#' },
      { label: 'Помочь транспортом', url: '#' },
      { label: 'Пополнить баланс ГЛ', url: '#' },
      { label: 'Передать вещи', url: '#' },
      { label: 'Стать партнером', url: '#' },
      { label: 'Стать волонтером', url: '#' },
    ],
  },
  { label: 'Новости', url: 'news' },
  { label: 'Отчеты', url: 'reports' },
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
    <NavigationMenu.Item className='relative w-max transition-colors duration-100 hover:text-brand-400'>
      {!links ? (
        <NavLink href={url}>{label}</NavLink>
      ) : (
        <>
          <NavigationMenu.Trigger>
            <NavLink href={url}>{label}</NavLink>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='absolute top-12 w-full min-w-max rounded bg-brand-200 px-6 py-6 text-xl leading-none'>
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
    <header className='grid h-24 grid-cols-main text-xl font-medium 2xl:text-2xl'>
      <div className='col-contain flex items-center justify-between gap-9'>
        <div className='min-w-min shrink-0'>
          <Link href={'/'}>
            <Image width='291' height='31' src='/logo.svg' alt='Потеряшки' />
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
          className='ml-auto inline min-w-max text-gray-900'
          href='tel:+7(904)494-55-66'
        >
          +7 (904) 494-55-66
        </a>
        <Button href='donate' className='inline h-full'>
          Пожертвовать
        </Button>
      </div>
    </header>
  )
}
