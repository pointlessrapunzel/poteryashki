import { Button } from '@/components/Button'
import Card from '@/components/Card'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import Image from 'next/image'
import React from 'react'
import QRImage from '@/../public/images/donate-qr.png'
import Head from 'next/head'

export default function Donate() {
  return (
    <>
      <Head>
        <title>{`Пожертвовать | Потеряшки`}</title>
        <meta name='description' content='' />
      </Head>
      <main className='grid-cols-main grid items-center justify-center gap-y-24 bg-brand-200 py-24'>
        <h1 className='col-contain text-center text-4xl lg:text-6xl'>
          Пожертвовать
        </h1>
        <Card
          padding='p-2 py-14 sm:px-9 sm:py-20'
          className='col-span-full md:col-span-5 md:col-start-2'
        >
          <DonateForm />
        </Card>
        <div className='col-contain flex flex-col gap-10 justify-self-center md:col-span-3 md:col-start-8 md:gap-20'>
          <Card
            padding='p-0'
            className='relative order-2 aspect-square w-[300px] bg-gray-400 md:order-1 lg:w-[350px]'
          >
            <Image src={QRImage} alt='QR код для пожертвования' fill />
          </Card>
          <h2 className='order-1 text-center text-3xl md:order-2'>
            Оплата по QR
          </h2>
        </div>
        <strong className='col-contain text-center text-5xl font-medium'>
          Спасибо вам!
        </strong>
      </main>
    </>
  )
}

const toggleItemCls =
  'basis-full rounded dashed-border bg-brand-100 data-[state=on]:bg-brand-200'
const toggleItemClsBig = toggleItemCls + ' p-3 lg:p-6'
const toggleItemClsSmall = toggleItemCls + ' p-2'

const itemsToBuy = {
  100: 'Лечебные капли для глаз',
  200: 'Антипаразитные таблетки',
  500: 'Капли от блох «Астрафарм»',
  1000: '1 кг лечебного корма «Royal Canin»',
}

function DonateForm() {
  const [frequency, setFrequency] = React.useState<'once' | 'monthly'>('once')
  const [amount, setAmount] = React.useState<string>('500')
  const [couldBuyItem, setCouldBuyItem] = React.useState('')

  React.useEffect(() => {
    if (+amount >= 1000) setCouldBuyItem(itemsToBuy[1000])
    else if (+amount >= 500) setCouldBuyItem(itemsToBuy[500])
    else if (+amount >= 200) setCouldBuyItem(itemsToBuy[200])
    else if (+amount >= 100) setCouldBuyItem(itemsToBuy[100])
    else setCouldBuyItem('')
  }, [amount])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('submitted form with: ', frequency, amount)
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = isNaN(+e.target.value) ? amount : e.target.value
    setAmount(newValue)
  }

  return (
    <form
      className='flex flex-col items-center gap-14 text-lg lg:gap-20 lg:text-3xl'
      onSubmit={handleSubmit}
    >
      <div className='flex w-full flex-col gap-8'>
        <ToggleGroup.Root
          type='single'
          className='flex w-full justify-between gap-7'
          aria-label='Регулярность пожертвования'
          value={frequency}
          onValueChange={(value: typeof frequency) => {
            if (value) setFrequency(value)
          }}
        >
          <ToggleGroup.Item value='once' className={toggleItemClsBig}>
            Разово
          </ToggleGroup.Item>
          <ToggleGroup.Item value='monthly' className={toggleItemClsBig}>
            Ежемесячно
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <strong className='block min-h-[1.75rem] text-center font-medium lg:min-h-[2.25rem]'>
          {/* min-height = line-height = 28/36px for text-lg/3xl to preserve white-space when donation amount less then 100 */}
          {couldBuyItem}
        </strong>
        <ToggleGroup.Root
          type='single'
          className='flex w-full justify-between gap-2 sm:gap-6'
          aria-label='Количество'
          value={amount}
          onValueChange={(value) => {
            if (value) setAmount(value)
          }}
        >
          <ToggleGroup.Item value='100' className={toggleItemClsSmall}>
            100
          </ToggleGroup.Item>
          <ToggleGroup.Item value='200' className={toggleItemClsSmall}>
            200
          </ToggleGroup.Item>
          <ToggleGroup.Item value='500' className={toggleItemClsSmall}>
            500
          </ToggleGroup.Item>
          <ToggleGroup.Item value='1000' className={toggleItemClsSmall}>
            1000
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
      <div className='dashed-border flex w-4/5 items-center rounded bg-brand-100 p-4 text-4xl lg:w-2/5'>
        <input
          className='w-full grow bg-inherit pr-2 text-4xl text-highlight outline-none'
          type='number'
          name='amount'
          id='amount'
          value={amount}
          onChange={handleAmountChange}
        />
        <span className='text-3xl uppercase'>Руб</span>
      </div>
      <Button>Пожертвовать</Button>
    </form>
  )
}
