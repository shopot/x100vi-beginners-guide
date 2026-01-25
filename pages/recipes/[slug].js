import { getStaticPathsForDirectory, getFileData } from '../../lib/files'
import { processMarkdown } from '../../lib/markdown'
import MarkdownPage from '../../components/MarkdownPage'

export default function RecipePage(props) {
  return <MarkdownPage {...props} backLinkText="← Назад на главную" />
}

export async function getStaticPaths() {
  return getStaticPathsForDirectory('recipes')
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const { data, content } = getFileData('recipes', slug)

  const { html, headings } = await processMarkdown(content, {
    extractHeadings: true,
  })

  return {
    props: {
      content: html,
      data,
      slug,
      headings,
    },
  }
}
