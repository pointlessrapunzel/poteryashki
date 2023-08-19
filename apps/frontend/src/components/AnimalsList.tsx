import Link from 'next/link'
import React from 'react'
import AnimalCard from './AnimalCard'
import { Animal } from '@/lib/animalsData'

type Props = { animals: Animal[] }

const AnimalsList = ({ animals }: Props) => {
  return (
    <>
      {animals.map((a) => (
        <li key={a.id}>
          <Link href={`/animals/${a.id}`}>
            <AnimalCard animal={a} />
          </Link>
        </li>
      ))}
    </>
  )
}
export default AnimalsList
