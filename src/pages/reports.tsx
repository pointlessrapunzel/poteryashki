import Head from 'next/head'
import React from 'react'

const reports = [
  { label: 'Отчет за 2022.pdf', url: '#' },
  { label: 'Отчет за 2021.pdf', url: '#' },
  { label: 'Отчет за 2020.pdf', url: '#' },
  { label: 'Отчет за 2022.pdf', url: '#' },
  { label: 'Отчет за 2021.pdf', url: '#' },
  { label: 'Отчет за 2020.pdf', url: '#' },
]

export default function Reports() {
  return (
    <>
      <Head>
        <title>Отчеты | Потеряшки</title>
        <meta name='description' content='' />
      </Head>
      <main className='flex flex-col items-center justify-center gap-24  bg-brand-200 py-24'>
        <h1 className='text-center text-6xl'>Отчёты</h1>
        <ul className='grid gap-y-12 gap-x-24 text-3xl sm:grid-cols-2 lg:grid-cols-3'>
          {reports.map((item, idx) => (
            <li key={idx}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
