import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const programsDir = path.join(process.cwd(), '/src/data/programs')

type MdData = {
  slug: string
  contentHtml?: string
}

export function getMarkdownFrom<T extends MdData>(mdDirPath: string) {
  const dirPath = path.join(process.cwd(), mdDirPath)
  return {
    getAllMdMetadata() {
      const fileNames = fs.readdirSync(dirPath)
      const allMdData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(dirPath, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        if (!matterResult.data.shortTitle)
          matterResult.data.shortTitle = matterResult.data.title

        return {
          slug,
          ...matterResult.data,
        }
      }) as Omit<T, 'contentHtml'>[]

      return allMdData
    },
    getAllMdSlugs() {
      const fileNames = fs.readdirSync(dirPath)
      return fileNames.map((fileName) => {
        return {
          params: {
            slug: fileName.replace(/\.md$/, ''),
          },
        }
      })
    },
    getMdData(slug: string) {
      const fullPath = path.join(dirPath, `${slug}.md`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      const contentHtml = marked.parse(matterResult.content)

      return {
        slug,
        contentHtml,
        ...matterResult.data,
      } as T
    },
  }
}
