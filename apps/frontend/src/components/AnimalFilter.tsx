import { FILTERS, FilterKey, FilterValue } from '@/lib/filterAnimals'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useRouter } from 'next/router'
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  PropsWithChildren,
  useState,
} from 'react'

export default function AnimalFilter() {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  // derive filter values from query params to control checkboxes
  const queryFilters = new Set(
    Object.values(router.query).reduce((prev: string[], cur): string[] => {
      if (!Array.isArray(cur)) return [...prev, cur!]

      return [...prev, ...cur]
    }, [])
  )

  const handleFilterUpdate = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { checked, name, value } = e.target

      const setURLQuery = (key: string, value: string[]) => {
        router.replace(
          {
            pathname: router.pathname,
            query: {
              ...router.query,
              [key]: value,
            },
          },
          undefined,
          { scroll: false }
        )
      }

      let oldQuery = router.query[name] || []

      if (checked) {
        if (typeof oldQuery == 'string') oldQuery = [oldQuery]
        let newQuery = Array.from(new Set([...oldQuery, value]))
        setURLQuery(name, newQuery)
      } else {
        let newQuery: string[]
        if (typeof oldQuery == 'string') newQuery = []
        else newQuery = oldQuery.filter((v) => v !== value)

        setURLQuery(name, newQuery)
      }
    },
    [router]
  )

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className='flex items-center justify-between'>
        <Collapsible.Trigger asChild>
          <button className='flex items-center gap-2 text-2xl font-thin'>
            {open ? 'Свернуть фильтр' : 'Показать фильтр'}
            <svg
              className={`-mb-[2px] stroke-current ${
                open ? null : 'rotate-180'
              }`}
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M22.5 18.75L15 11.25L7.5 18.75'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className='space-y-10 py-10 sm:space-y-6'>
        {Object.entries(FILTERS).map(([key, options]) => (
          <div className='flex items-start text-xl' key={key}>
            <span className='shrink-0 basis-[124px] sm:basis-[148px]'>
              {FILTER_LABELS.get(key as FilterKey)}
            </span>
            <div className='flex flex-wrap gap-5'>
              {options.map((option) => (
                <FilterOptionButton
                  key={option}
                  name={key}
                  value={option}
                  id={`filter=${option}`}
                  onChange={handleFilterUpdate}
                  checked={queryFilters.has(option)}
                >
                  {FILTER_LABELS.get(option)}
                </FilterOptionButton>
              ))}
            </div>
          </div>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

const FILTER_LABELS = new Map<FilterKey | FilterValue, string>([
  ['type', 'Питомец'],
  ['dog', 'Собака'],
  ['cat', 'Кошка'],
  ['sex', 'Пол'],
  ['male', 'Мальчик'],
  ['female', 'Девочка'],
  // ages
  ['age', 'Возраст'],
  ['lt6mon', 'до 6 мес.'],
  ['6-12mon', '6-12 мес.'],
  ['1-5yr', '1-5 лет'],
  ['5-10yr', '5-10 лет'],
  ['gt10yr', 'от 10 лет'],
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
])

type FilterButtonProps = PropsWithChildren<
  InputHTMLAttributes<HTMLInputElement>
> & {
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

function FilterOptionButton({ id, children, ...props }: FilterButtonProps) {
  return (
    <div>
      <input className='peer sr-only' type='checkbox' id={id} {...props} />
      <label
        htmlFor={id}
        className='cursor-pointer select-none rounded border border-black bg-white px-6 py-0.5 font-light outline-offset-2 peer-checked:bg-brand-300 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-0 peer-focus-visible:outline-highlight'
      >
        {children}
      </label>
    </div>
  )
}
