import { getMarkdownFrom } from './getMarkdownData'

export type HelpData = {
  slug: string
  title: string
  shortTitle: string
  linkImage: string
  contentHtml: string
  order: number
}

const {
  getAllMdMetadata,
  getMdData: getHelpData,
  getAllMdSlugs: getAllHelpSlugs,
} = getMarkdownFrom<HelpData>('/src/data/help')

function getAllHelpData() {
  return getAllMdMetadata().sort((a, b) => a.order - b.order)
}

export { getAllHelpData, getHelpData, getAllHelpSlugs }
