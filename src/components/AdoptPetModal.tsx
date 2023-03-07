import * as Dialog from '@radix-ui/react-dialog'
import TextInput from '@/components/TextInput'
import { Button } from './Button'

export default function AdoptPetModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Взять питомца</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow' />
        <Dialog.Content className='fixed top-[50%] left-[50%] flex w-[90vw] max-w-[1083px] translate-x-[-50%] translate-y-[-50%] flex-col items-center rounded bg-brand-200 p-24 font-medium focus:outline-none data-[state=open]:animate-contentShow'>
          <Dialog.Title className='font-sans text-6xl'>
            Приручить питомца
          </Dialog.Title>
          <Dialog.Description className='mt-10 max-w-[28ch] text-3xl'>
            Оставьте заявку, мы свяжемся с вами и расскажем, как приручить эту
            милаху!
          </Dialog.Description>
          <TextInput label='Имя' name='name' className='mt-12' />
          <TextInput
            label='Email или телефон'
            name='contact-details'
            className='mt-12'
          />
          <Dialog.Close asChild>
            <Button className='mt-10 text-4xl'>Оставить заявку</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
