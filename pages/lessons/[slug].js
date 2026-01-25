import { getStaticPathsForDirectory, getFileData } from '../../lib/files'
import { processMarkdown } from '../../lib/markdown'
import MarkdownPage from '../../components/MarkdownPage'

export default function LessonPage(props) {
  return <MarkdownPage {...props} backLinkText="← Назад к списку уроков" />
}

export async function getStaticPaths() {
  return getStaticPathsForDirectory('lessons')
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const { data, content } = getFileData('lessons', slug)

  const { html, headings } = await processMarkdown(content, {
    extractHeadings: true,
    fixLessonLinks: true,
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
