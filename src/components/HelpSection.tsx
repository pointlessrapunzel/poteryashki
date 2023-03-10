import { HelpData } from '@/lib/getHelpData'
import Image from 'next/image'
import Link from 'next/link'
import Card from './Card'

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
      className='grid grid-cols-main gap-y-24 bg-brand-200 py-24'
    >
      <h2 className='col-contain text-center text-6xl'>{heading}</h2>
      <div className='col-contain grid grid-cols-4 place-content-center place-items-center gap-x-32 gap-y-24'>
        {helpData.map((el) => (
          <Link key={el.shortTitle} href={`/help/${el.slug}`}>
            <Card className='flex h-[312px] w-[302px] flex-col items-center justify-between gap-8 text-center text-2xl font-extrabold uppercase'>
              <div className='flex grow items-center'>
                <Image src={el.linkImage} width={130} height={130} alt='' />
              </div>
              <p>{el.shortTitle}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
