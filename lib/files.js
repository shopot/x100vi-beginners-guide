import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * Получает список markdown файлов из директории
 */
export function getMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((file) => file.endsWith('.md'))
}

/**
 * Генерирует пути для getStaticPaths
 */
export function getStaticPathsForDirectory(directory) {
  const dir = path.join(process.cwd(), directory)
  const filenames = getMarkdownFiles(dir)

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }))

  return { paths, fallback: false }
}

/**
 * Получает данные файла для getStaticProps
 */
export function getFileData(directory, slug) {
  const filePath = path.join(process.cwd(), directory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return { data, content }
}
