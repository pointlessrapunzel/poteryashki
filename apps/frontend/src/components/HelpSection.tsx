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
      <h2 className='col-contain text-center text-4xl lg:text-5.9xl'>
        {heading}
      </h2>
      <div className='col-contain grid grid-cols-2 place-content-center place-items-center gap-x-4 gap-y-8 lg:grid-cols-4 2xl:gap-x-[7.875rem] 2xl:gap-y-24'>
        {helpData.map((el) => (
          <Link
            key={el.shortTitle}
            className='dashed-border flex aspect-[302/312] h-full max-h-[312px] w-full max-w-[302px] flex-col items-center gap-4 bg-neutral-100 p-4 py-4 text-center text-sm sm:gap-4 sm:py-6 sm:text-xl md:text-2xl xl:text-[1.6875rem]'
            href={`/help/${el.slug}`}
          >
            <div className='relative flex grow items-center'>
              <Image src={el.linkImage} width={136} height={136} alt='' />
            </div>
            <p className='flex basis-1/3 items-center font-extrabold uppercase leading-tight'>
              {el.shortTitle}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
