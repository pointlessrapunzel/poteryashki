import { ButtonAsLink } from '@/components/Button'

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center gap-16 bg-pink-200 py-24 font-medium'>
      <h1 className='text-6xl'>Такой страницы нет</h1>
      <p className='text-5xl'>Её правда нет</p>
      <ButtonAsLink href='/'>На главную</ButtonAsLink>
    </main>
  )
}
