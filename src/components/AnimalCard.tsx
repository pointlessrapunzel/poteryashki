import Image from 'next/image'
import Card from '@/components/Card'
import { Animal, getTraitLabel } from '@/lib/animalsData'

function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <Card className='relative flex flex-col text-center text-3xl'>
      <Image
        className='aspect-square object-cover'
        height={464}
        width={463}
        src={animal.photos[0]}
        alt={animal.name}
      />
      <h2>{animal.name}</h2>
      <p className='-mt-2 font-light'>
        {getTraitLabel(animal.sex)},{' '}
        <span className='whitespace-nowrap'>{animal.age}</span>
      </p>
    </Card>
  )
}

export default AnimalCard
