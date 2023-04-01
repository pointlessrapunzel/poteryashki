import { genCatsData } from '@/data/animals/genCatsData'

const animalsData = genCatsData()

export type AnimalType = (typeof animalsData)[0]

export function getAnimalsData() {
  return animalsData
}

export function getAnimalData(id: string) {
  return animalsData.find((a) => a.id === +id)
}

export function getMoreAnimalsLinks(excludeId: number) {
  const result: typeof animalsData = []
  const getRandom = () =>
    animalsData[Math.floor(Math.random() * animalsData.length)]

  for (let i = 0; i < 3; i++) {
    const r = getRandom()

    if (!result.includes(r) && r.id != excludeId) result.push(r)
    else i--
  }

  return result
}

export function getAnimalsPaths() {
  return animalsData.map((a) => ({
    params: {
      id: String(a.id),
    },
  }))
}
