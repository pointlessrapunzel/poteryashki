import { Button } from './Button'
import TextInput from './TextInput'

export function ContactFormSection() {
  return (
    <section className='grid-cols-main grid gap-y-20 bg-brand-200 py-20'>
      <ContactForm />
    </section>
  )
}

type Props = {
  containerClassNames?: string
  heading?: React.ReactNode
}

export default function ContactForm({
  containerClassNames = 'col-contain',
  heading = (
    <h2 className='text-center text-4xl lg:text-5.9xl'>Напишите нам</h2>
  ),
}: Props) {
  return (
    <div className={containerClassNames}>
      {heading}
      <form className='mt-20 grid w-full gap-x-8 gap-y-7 text-3xl sm:grid-cols-[32fr,61fr] sm:grid-rows-3 lg:gap-x-16 lg:gap-y-10 2xl:gap-x-[4.6875rem]'>
        <TextInput
          required
          label='Имя'
          name='contact-name'
          className='col-start-1'
        />
        <TextInput
          required
          label='Email или телефон'
          name='contact-details'
          className='col-start-1'
        />
        <div className='row-span-3 flex flex-col text-xl sm:col-start-2 sm:row-start-1 lg:text-3xl 2xl:text-4xl'>
          <label htmlFor='contact-message'>Сообщение</label>
          <textarea
            className='dashed-border mt-3 block h-full w-full rounded bg-neutral-100 p-2 leading-none outline-none lg:p-6'
            name='message'
            id='contact-message'
            cols={30}
            rows={10}
            required
          ></textarea>
        </div>
        <Button className='m-auto' fontSize='text-4xl' type='submit'>
          Отправить
        </Button>
      </form>
    </div>
  )
}
