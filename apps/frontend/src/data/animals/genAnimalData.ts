import animals from './animals.json'
import catsJSON from './cats.json'

const RANDOM_CAT_PHOTO_API_URL = 'https://loremflickr.com/320/240/cat'
const RANDOM_DOG_PHOTO_API_URL = 'https://loremflickr.com/320/240/dog'

export type Animal = {
  id: string
  type: 'cat' | 'dog'
  name: string
  sex: 'male' | 'female'
  birthdate: string
  age: string
  breed: string
  fur: (typeof ANIMAL_FURS)[number]
  color: (typeof ANIMAL_COLORS)[number]
  photos: string[]
  description: string
  neutered: Boolean
  vaccinated: Boolean
  chipped: Boolean
  parasitesRemoved: Boolean
}

const ANIMAL_FURS = ['short', 'long'] as const
const ANIMAL_COLORS = [
  'black',
  'white',
  'orange',
  'bicolor',
  'tricolor',
] as const

function getRandomColor() {
  return ANIMAL_COLORS[Math.floor(Math.random() * ANIMAL_COLORS.length)]
}

function getRandomFur() {
  return ANIMAL_FURS[Math.floor(Math.random() * ANIMAL_FURS.length)]
}

const cats = catsJSON.map((c) => {
  return {
    ...c,
    id: String(c.id),
    type: 'cat',
    description: `${c.name} - это весёлый, игривый подросток, с которым точно не соскучишься, а ещё он любит людей и ласку. Спать предпочитает с человеком, но так, что бы не потревожить его сон. Совершенно не любит оставаться один, поэтому предпочитает всегда находится где-то рядом.`,
  }
})

export function genAnimalData(): Animal[] {
  return ([...animals, ...cats] as Animal[]).map((a) => {
    let photoUrl: string
    if (a.photos[0].match(/random/i)) {
      if (a.type == 'cat') photoUrl = `${RANDOM_CAT_PHOTO_API_URL}?lock=${a.id}`
      else photoUrl = `${RANDOM_DOG_PHOTO_API_URL}?lock=${a.id}`
    } else photoUrl = a.photos[0]

    const photos = new Array(4).fill(null).map((_) => photoUrl)

    return {
      id: a.id,
      type: a.type,
      name: a.name,
      age: a.age,
      sex: a.sex,
      birthdate: a.birthdate,
      breed: 'mixed',
      fur: a.fur || getRandomFur(),
      color: getRandomColor(),
      neutered: true,
      vaccinated: true,
      chipped: true,
      parasitesRemoved: true,
      photos,
      description: a.description,
    }
  })
}
