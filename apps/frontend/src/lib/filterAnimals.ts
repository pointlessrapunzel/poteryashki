import { GetServerSidePropsContext } from 'next'
import { Animal } from './animalsData'

export const FILTERS = {
  type: ['dog', 'cat'],
  sex: ['male', 'female'],
  age: ['lt6mon', '6-12mon', '1-5yr', '5-10yr', 'gt10yr'],
  color: ['black', 'white', 'orange', 'bicolor', 'tricolor'],
  fur: ['short', 'long'],
} as const

export type FilterKey = keyof typeof FILTERS
export type FilterValue = (typeof FILTERS)[keyof typeof FILTERS][number]
export type Filters = Array<[FilterKey, FilterValue | FilterValue[]]>

export function filterAnimals(animals: Animal[], filters: Filters): Animal[] {
  return animals.filter((animal) => {
    return filters.every(([key, query]) => {
      // works for both if color query is an array and a string
      // true if the animal's color is in the query
      if (key == 'color') return query?.includes(animal[key])
      else if (key == 'age') {
        return typeof query == 'string'
          ? matchAgeStringToFilter(animal.age, query)
          : query.some((queryAge) =>
              matchAgeStringToFilter(animal.age, queryAge)
            )
      }
      // animal type, sex and fur have two variants
      // if query is not a single value, then both are chosen
      return typeof query == 'string' ? animal[key] == query : true
    })
  })
}

// убирает из queryParams все ключи, которых нет в FILTERS
export function parseFiltersFromQueryParams(
  queryParams: GetServerSidePropsContext['query']
) {
  return Object.entries(queryParams).filter(([key]) =>
    FILTERS.hasOwnProperty(key)
  ) as Filters
}

function matchAgeStringToFilter(age: string, filter: string): Boolean {
  // TODO: change ageString to birthdate
  // 1 - 11 месяц(ев)
  if (age.match(/месяц/)) {
    const months = +age.split(' ')[0]
    return months < 6 ? filter == 'lt6mon' : filter == '6-12mon'
  }
  // 1-4 год(а)
  else if (age.match(/год/)) return filter == '1-5yr'
  // 5-10 лет
  else {
    const years = +age.split(' ')[0]
    return years < 10 ? filter == '5-10yr' : filter == 'gt10yr'
  }
}
