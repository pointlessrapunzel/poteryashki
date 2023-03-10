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
        <Dialog.Content className='fixed top-[50%] left-[50%] flex w-[80vw] translate-x-[-50%] translate-y-[-50%] flex-col items-center rounded bg-brand-200 px-8 py-12 font-medium focus:outline-none data-[state=open]:animate-contentShow lg:w-[90vw] lg:max-w-[1083px] lg:justify-center lg:p-24'>
          <Dialog.Title className='text-center font-sans text-2xl lg:text-6xl'>
            Приручить питомца
          </Dialog.Title>
          <Dialog.Description className='mt-10 max-w-[28ch] text-center text-xl lg:text-3xl'>
            Оставьте заявку, мы свяжемся с вами и расскажем, как приручить эту
            милаху!
          </Dialog.Description>
          <TextInput
            label='Имя'
            name='name'
            className='mt-8'
            inputBg='bg-brand-100'
          />
          <TextInput
            label='Email или телефон'
            name='contact-details'
            inputBg='bg-brand-100'
            className='mt-8'
          />
          <Dialog.Close asChild>
            <Button className='mt-10 text-xl lg:text-4xl'>
              Оставить заявку
            </Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button
              className='focus:shadow-violet7 absolute top-2 right-2 inline-flex h-10 w-10 appearance-none items-center justify-center rounded-full p-2 hover:bg-brand-400/30 focus:shadow-[0_0_0_2px] focus:shadow-brand-600 focus:outline-none lg:top-8 lg:right-8 lg:h-16 lg:w-16'
              aria-label='Закрыть'
            >
              <svg
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z'
                  fill='currentColor'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
