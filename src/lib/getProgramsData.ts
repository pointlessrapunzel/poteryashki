import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const programsDir = path.join(process.cwd(), '/src/data/programs')

type ProgramData = {
  slug: string
  title: string
  shortTitle: string
  imageUrl: string
  contentHtml: string
}

export function getAllProgramsData(): Omit<ProgramData, 'contentHtml'>[] {
  const fileNames = fs.readdirSync(programsDir)
  const allProgramsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(programsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      ...matterResult.data,
    }
  }) as ProgramData[]

  return allProgramsData
}

export function getAllProgramSlugs() {
  const fileNames = fs.readdirSync(programsDir)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export function getProgramData(slug: string): ProgramData {
  const fullPath = path.join(programsDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const contentHtml = marked.parse(matterResult.content)

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  } as ProgramData
}
