import { Button } from './Button'
import TextInput from './TextInput'

export default function ContactForm() {
  return (
    <section className='grid grid-cols-main gap-y-20 bg-brand-200 py-24'>
      <div className='col-contain'>
        <h2 className='text-center text-6xl'>Напишите нам</h2>
        <form className='mt-16 flex w-full justify-between gap-12 text-3xl'>
          <div className='flex basis-1/3 flex-col items-center gap-7'>
            <TextInput label='Имя' name='contact-name' />
            <TextInput label='Email или телефон' name='contact-details' />
            <Button className='mt-auto text-3xl' type='submit'>
              Отправить
            </Button>
          </div>
          <div className='flex basis-2/3 flex-col'>
            <label htmlFor='contact-message'>Сообщение</label>
            <textarea
              className='dashed-border mt-3 block h-full w-full rounded  bg-neutral-100 p-2 leading-none outline-none lg:p-6'
              name='message'
              id='contact-message'
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  )
}
