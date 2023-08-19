import { getMarkdownFrom } from './getMarkdownData'

export type NewsData = {
  slug: string
  title: string
  subtitle: string
  mainImage: string
  sideImages?: { src: string }[]
  contentHtml: string
}

const {
  getAllMdMetadata: getAllNewsMetadata,
  getMdData: getNewsData,
  getAllMdSlugs: getAllNewsSlugs,
} = getMarkdownFrom<NewsData>('/src/data/news')

function getAllNewsLinks() {
  const metadata = getAllNewsMetadata()

  return metadata
}

function getNewsLinksForHomepage() {
  return getAllNewsLinks().slice(0, 3)
}

export {
  getAllNewsLinks,
  getNewsData,
  getAllNewsSlugs,
  getNewsLinksForHomepage,
}
