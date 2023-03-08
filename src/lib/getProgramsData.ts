import { getMarkdownFrom } from './getMarkdownData'

type ProgramData = {
  slug: string
  title: string
  shortTitle: string
  imageUrl: string
  contentHtml: string
}

export const {
  getAllMdMetadata: getAllProgramsData,
  getMdData: getProgramData,
  getAllMdSlugs: getAllProgramSlugs,
} = getMarkdownFrom<ProgramData>('/src/data/programs')
