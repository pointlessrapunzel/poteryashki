/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const { PHASE_EXPORT } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_EXPORT) {
    return {
      reactStrictMode: true,
      images: {
        unoptimized: true,
      },
    }
  }

  return {
    ...defaultConfig,
    reactStrictMode: true,
    images: {
      domains: ['loremflickr.com'],
    },
  }
}
