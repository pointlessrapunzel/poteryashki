import localFont from '@next/font/local'
import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '@/components/Footer'

const onestFont = localFont({
  src: [
    {
      path: '../assets/fonts/onest2/OnestBlack.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/onest2/OnestExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/onest2/OnestMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/onest2/OnestRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/onest2/OnestLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/onest2/OnestThin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-onest',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${onestFont.variable} bg-neutral-100 font-sans font-medium`}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
