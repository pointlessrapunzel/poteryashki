import Head from 'next/head'
import React from 'react'

const reports = [
  'Отчет за 2022.pdf',
  'Отчет за 2021.pdf',
  'Отчет за 2020.pdf',
  'Отчет за 2022.pdf',
  'Отчет за 2021.pdf',
  'Отчет за 2020.pdf',
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
        <ul className='grid grid-cols-3 gap-y-12 gap-x-24 text-3xl'>
          {reports.map((el, idx) => (
            <li key={idx}>
              <a href='#'>{el}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
