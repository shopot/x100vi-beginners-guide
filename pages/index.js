import path from 'path'
import Link from 'next/link'
import Layout from '../components/Layout'
import { formatTitle } from '../lib/format'
import { getMarkdownFiles } from '../lib/files'
import { extractFirstH1 } from '../lib/markdown'
import { getFileData } from '../lib/files'

export default function Home({ lessons, guides, recipes }) {
  return (
    <Layout title="📷 Курс «Основы фотографии с Fujifilm X100VI»">
      <div className="container">
        <h1>📷 Курс «Основы фотографии с Fujifilm X100VI»</h1>

        <blockquote>
          Полный курс для начинающих фотографов, которые только что приобрели
          свою первую камеру Fujifilm X100VI.
        </blockquote>

        <h2>О курсе</h2>
        <p>
          Этот курс для тех, у кого X100VI — первая камера в жизни. Курс
          охватывает все необходимые темы от базовых настроек камеры до
          продвинутых техник композиции и работы со светом.
        </p>

        <h3>Для кого этот курс</h3>
        <ul>
          <li>✅ Полные новички в фотографии</li>
          <li>✅ Владельцы Fujifilm X100VI</li>
          <li>✅ Те, кто хочет понять основы, а не просто «щёлкать»</li>
          <li>✅ Те, кто готов практиковаться</li>
        </ul>

        <h2>Структура курса</h2>

        <h3>📚 Уроки</h3>
        <ul>
          {lessons
            .sort((a, b) => {
              // Сортируем по номеру урока из названия файла
              const numA = parseInt(a.slug.match(/\d+/)?.[0] || '999')
              const numB = parseInt(b.slug.match(/\d+/)?.[0] || '999')
              return numA - numB
            })
            .map((lesson) => (
              <li key={lesson.slug}>
                <Link href={`/lessons/${lesson.slug}`}>
                  {lesson.data.title ||
                    formatTitle(lesson.slug.replace(/lesson-\d+-/, '')) ||
                    lesson.slug}
                </Link>
              </li>
            ))}
        </ul>

        <h3>🌏 Гайды</h3>
        <ul>
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link href={`/guides/${guide.slug}`}>
                {guide.data.title || formatTitle(guide.slug)}
              </Link>
            </li>
          ))}
        </ul>

        <h3>📖 Рецепты (Film Simulation Recipes)</h3>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.slug}>
              <Link href={`/recipes/${recipe.slug}`}>
                {recipe.data.title || formatTitle(recipe.slug)}
              </Link>
            </li>
          ))}
        </ul>

        <h2>Как проходить курс</h2>
        <h3>Рекомендуемый подход</h3>
        <ol>
          <li>
            <strong>Читайте по одному занятию</strong> — не спешите
          </li>
          <li>
            <strong>Выполняйте практические задания</strong> — теория без
            практики бесполезна
          </li>
          <li>
            <strong>Проверяйте себя по чек-листам</strong> — убедитесь, что всё
            поняли
          </li>
          <li>
            <strong>Снимайте каждый день</strong> — даже 10-15 минут в день дают
            результат
          </li>
          <li>
            <strong>Возвращайтесь к материалу</strong> — повторение закрепляет
            знания
          </li>
        </ol>

        <h2>Что вам понадобится</h2>
        <h3>Обязательно</h3>
        <ul>
          <li>📷 Камера Fujifilm X100VI</li>
          <li>💾 Карта памяти (минимум 32 ГБ)</li>
          <li>🔋 Заряженный аккумулятор</li>
        </ul>

        <h3>Желательно</h3>
        <ul>
          <li>💻 Компьютер для просмотра и обработки фото</li>
          <li>📝 Блокнот для заметок</li>
          <li>📄 Белый картон (для отражателя)</li>
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const lessonsDir = path.join(process.cwd(), 'lessons')
  const guidesDir = path.join(process.cwd(), 'guides')
  const recipesDir = path.join(process.cwd(), 'recipes')

  const getFilePreview = async (directory, filename) => {
    const slug = filename.replace(/\.md$/, '')
    const { data, content } = getFileData(directory, slug)

    // Извлекаем первый H1 заголовок из markdown
    const firstH1 = await extractFirstH1(content)

    return {
      slug,
      data: {
        ...data,
        title: data.title || firstH1, // Используем title из frontmatter или первый H1
      },
      content: content.substring(0, 200), // только превью для главной страницы
    }
  }

  const lessons = await Promise.all(
    getMarkdownFiles(lessonsDir).map((file) =>
      getFilePreview('lessons', file)
    )
  )
  const guides = await Promise.all(
    getMarkdownFiles(guidesDir).map((file) => getFilePreview('guides', file))
  )
  const recipes = await Promise.all(
    getMarkdownFiles(recipesDir).map((file) => getFilePreview('recipes', file))
  )

  return {
    props: {
      lessons,
      guides,
      recipes,
    },
  }
}
