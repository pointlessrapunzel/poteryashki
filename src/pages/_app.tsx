import localFont from '@next/font/local'
import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '@/components/Footer'
import Head from 'next/head'

const onestFont = localFont({
  src: [
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
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={`bg-neutral-100 font-sans font-medium`}>
        <style jsx global>{`
          :root {
            --font-onest: ${onestFont.style.fontFamily};
          }
        `}</style>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
