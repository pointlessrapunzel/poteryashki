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

export { getAllNewsLinks, getNewsData, getAllNewsSlugs }
