import { genAnimalData } from '@/data/animals/genAnimalData'
export type { Animal } from '@/data/animals/genAnimalData'

const animalsData = genAnimalData()

export function getAnimalsData() {
  return animalsData
}

export function getAnimalData(id: string) {
  return animalsData.find((a) => a.id === id)
}

export function getMoreAnimalsLinks(excludeId: string) {
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

export function getTraitLabel(prop: string) {
  if (prop.match(/лет|год|месяц/)) return prop

  let result = TRAIT_LABELS.get(prop)
  if (!result) throw new Error(`Non existent display prop: ${prop}`)

  return result
}

const TRAIT_LABELS = new Map([
  ['sex', 'Пол'],
  ['male', 'Мальчик'],
  ['female', 'Девочка'],
  ['age', 'Возраст'],
  // furs
  ['fur', 'Шерсть'],
  ['short', 'Короткая'],
  ['long', 'Длинная'],
  // colors
  ['color', 'Окрас'],
  ['black', 'Черный'],
  ['white', 'Белый'],
  ['orange', 'Рыжий'],
  ['bicolor', 'Двухцветный'],
  ['tricolor', 'Трехцветный'],
  // breeds
  ['breed', 'Порода'],
  ['mixed', 'Смешанная'],
  // other traits
  ['neutered', 'Стерилизован'],
  ['vaccinated', 'Вакцинирован'],
  ['parasitesRemoved', 'Обработан от паразитов'],
  ['chipped', 'Чипирован'],
])
