import { getMarkdownFrom } from './getMarkdownData'

export type HelpData = {
  slug: string
  title: string
  shortTitle: string
  linkImage: string
  contentHtml: string
}

export const {
  getAllMdMetadata: getAllHelpData,
  getMdData: getHelpData,
  getAllMdSlugs: getAllHelpSlugs,
} = getMarkdownFrom<HelpData>('/src/data/help')
