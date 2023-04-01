import { HelpData } from '@/lib/getHelpData'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  helpData: HelpData[]
  heading?: string
}

export default function HelpSection({
  helpData,
  heading: heading = 'Как нам помочь',
}: Props) {
  return (
    <section
      id='help'
      className='grid-cols-main grid gap-y-16 bg-brand-200 py-20 lg:gap-y-24'
    >
      <h2 className='col-contain text-center text-4xl lg:text-6xl'>
        {heading}
      </h2>
      <div className='col-contain grid grid-cols-2 place-content-center place-items-center gap-y-8 gap-x-4 lg:grid-cols-4 lg:gap-y-24 lg:gap-x-16'>
        {helpData.map((el) => (
          <Link
            key={el.shortTitle}
            className='dashed-border flex aspect-[302/312] h-full max-h-[312px] w-full max-w-[302px] flex-col items-center justify-between gap-4 bg-neutral-100 p-4 py-4 text-center text-sm sm:gap-4 sm:p-8 sm:text-xl md:text-2xl xl:text-3xl'
            href={`/help/${el.slug}`}
          >
            <div className='relative flex max-h-[150px] w-3/5 max-w-[100px] basis-2/3 items-center justify-center sm:max-w-[136px]'>
              <Image
                className='max-w-auto max-h-full'
                src={el.linkImage}
                width={136}
                height={136}
                alt=''
              />
            </div>
            <p className='flex basis-1/3 items-center font-extrabold leading-tight'>
              {el.shortTitle}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
