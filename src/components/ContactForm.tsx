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
  heading = <h2 className='text-center text-4xl lg:text-6xl'>Напишите нам</h2>,
}: Props) {
  return (
    <div className={containerClassNames}>
      {heading}
      <form className='mt-16 grid w-full gap-y-7 gap-x-8 text-3xl sm:grid-cols-[1fr,2fr] lg:gap-x-16'>
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
        <div className='row-span-3 flex flex-col text-xl sm:col-start-2 sm:row-start-1 lg:text-3xl'>
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
        <Button className='mx-auto' fontSize='text-3xl' type='submit'>
          Отправить
        </Button>
      </form>
    </div>
  )
}
