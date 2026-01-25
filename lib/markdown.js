import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'

/**
 * Генерирует slug в стиле GitHub из текста
 */
export function githubSlug(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Извлекает текст из узла markdown (поддерживает text и link)
 */
function extractTextFromNode(node) {
  if (node.type === 'text') return node.value
  if (node.type === 'link') {
    return node.children.map((c) => (c.type === 'text' ? c.value : '')).join('')
  }
  if (node.type === 'element' && node.tagName === 'a') {
    return node.children.map((c) => (c.type === 'text' ? c.value : '')).join('')
  }
  return ''
}

/**
 * Создает плагин для извлечения заголовков из markdown AST
 */
export function createExtractHeadingsPlugin(headings) {
  return () => {
    return (tree) => {
      visit(tree, 'heading', (node) => {
        const text = node.children.map(extractTextFromNode).join('')
        const id = githubSlug(text)
        headings.push({
          id,
          text,
          depth: node.depth,
        })
      })
    }
  }
}

/**
 * Создает кастомный плагин rehype для добавления id к заголовкам
 */
export function createRehypeSlugPlugin() {
  return () => {
    return (tree) => {
      visit(tree, 'element', (node) => {
        if (
          node.tagName === 'h1' ||
          node.tagName === 'h2' ||
          node.tagName === 'h3' ||
          node.tagName === 'h4' ||
          node.tagName === 'h5' ||
          node.tagName === 'h6'
        ) {
          const text = node.children.map(extractTextFromNode).join('')
          const id = githubSlug(text)
          node.properties = node.properties || {}
          node.properties.id = id
        }
      })
    }
  }
}

/**
 * Создает плагин для исправления ссылок на уроки
 */
export function createFixLessonLinksPlugin() {
  return () => {
    return (tree) => {
      visit(tree, 'element', (node) => {
        if (node.tagName === 'a' && node.properties && node.properties.href) {
          const href = node.properties.href
          // Проверяем, является ли ссылка относительной ссылкой на урок
          if (href.match(/^lesson-\d+-.+\.md$/)) {
            const lessonSlug = href.replace(/\.md$/, '')
            node.properties.href = `/lessons/${lessonSlug}`
          }
        }
      })
    }
  }
}

/**
 * Извлекает первый H1 заголовок из markdown контента
 * @param {string} content - Markdown контент
 * @returns {Promise<string|null>}
 */
export async function extractFirstH1(content) {
  try {
    const tree = await remark().parse(content)
    let firstH1 = null
    visit(tree, 'heading', (node) => {
      if (node.depth === 1 && !firstH1) {
        firstH1 = node.children.map(extractTextFromNode).join('')
      }
    })
    return firstH1
  } catch (error) {
    console.error('Error extracting first H1:', error)
    return null
  }
}

/**
 * Обрабатывает markdown контент и возвращает HTML
 * @param {string} content - Markdown контент
 * @param {Object} options - Опции обработки
 * @param {boolean} options.extractHeadings - Извлекать ли заголовки
 * @param {boolean} options.fixLessonLinks - Исправлять ли ссылки на уроки
 * @returns {Promise<{html: string, headings: Array}>}
 */
export async function processMarkdown(content, options = {}) {
  const { extractHeadings = false, fixLessonLinks = false } = options

  const headings = []
  let processor = remark().use(remarkGfm)

  if (extractHeadings) {
    processor = processor.use(createExtractHeadingsPlugin(headings))
  }

  processor = processor.use(remarkRehype).use(createRehypeSlugPlugin())

  if (fixLessonLinks) {
    processor = processor.use(createFixLessonLinksPlugin())
  }

  processor = processor
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['anchor'],
      },
    })
    .use(rehypeStringify)

  const processedContent = await processor.process(content)

  return {
    html: processedContent.toString(),
    headings,
  }
}
