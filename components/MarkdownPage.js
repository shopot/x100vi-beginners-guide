import Layout from './Layout'
import Link from 'next/link'

export default function MarkdownPage({
  content,
  data,
  slug,
  headings,
  backLinkText = '← Назад на главную',
}) {
  const title = data.title || slug.replace(/lesson-\d+-/, '').replace(/-/g, ' ')

  return (
    <Layout title={title}>
      <div className="container">
        <Link href="/" className="back-link">
          {backLinkText}
        </Link>
        <article>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        <div className="navigation">
          <Link href="/" className="back-link">
            {backLinkText}
          </Link>
        </div>
      </div>
      <style jsx>{`
        .back-link {
          display: inline-block;
          margin-bottom: 2rem;
          color: #0066cc;
          text-decoration: none;
          font-weight: 500;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        .navigation {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #eee;
        }

        :global(article h1),
        :global(article h2),
        :global(article h3),
        :global(article h4),
        :global(article h5),
        :global(article h6) {
          scroll-margin-top: 20px;
        }
      `}</style>
    </Layout>
  )
}
