import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children, title = 'Курс Fujifilm X100VI' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Курс для начинающих фотографов с Fujifilm X100VI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📷</text></svg>"
        />
      </Head>
      <nav className="nav">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            📷 X100VI Курс
          </Link>
          <div className="nav-links">
            <Link href="/">Главная</Link>
          </div>
        </div>
      </nav>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>Удачных кадров! 📷✨</p>
      </footer>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #fff;
        }

        .nav {
          background-color: #1a1a1a;
          color: #fff;
          padding: 1rem 0;
          border-bottom: 1px solid #333;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.25rem;
          font-weight: 600;
          text-decoration: none;
          color: #fff;
        }

        .nav-logo:hover {
          opacity: 0.8;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          margin-left: 1.5rem;
          transition: opacity 0.2s;
        }

        .nav-links a:hover {
          opacity: 0.7;
        }

        .main {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          min-height: calc(100vh - 200px);
        }

        .container {
          max-width: 100%;
        }

        article {
          margin-top: 2rem;
        }

        h1 {
          font-size: 2.5rem;
          margin-top: 0;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        h2 {
          font-size: 2rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        h3 {
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        h4 {
          font-size: 1.25rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        p {
          margin-bottom: 1rem;
        }

        ul,
        ol {
          margin-bottom: 1rem;
          padding-left: 2rem;
        }

        li {
          margin-bottom: 0.5rem;
        }

        a {
          color: #0066cc;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        blockquote {
          border-left: 4px solid #0066cc;
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: #666;
          font-style: italic;
        }

        code {
          background-color: #f4f4f4;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.9em;
        }

        pre {
          background-color: #1a1a1a;
          color: #f8f8f2;
          padding: 1rem;
          border-radius: 5px;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        pre code {
          background-color: transparent;
          padding: 0;
          color: inherit;
        }

        table {
          border-collapse: collapse;
          width: 100%;
          margin: 1.5rem 0;
          font-size: 0.95rem;
        }

        table th,
        table td {
          border: 1px solid #ddd;
          padding: 0.75rem;
          text-align: left;
        }

        table th {
          background-color: #f2f2f2;
          font-weight: 600;
        }

        table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        hr {
          border: none;
          border-top: 2px solid #eee;
          margin: 2rem 0;
        }

        img {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
          margin: 1.5rem 0;
        }

        .footer {
          background-color: #f9f9f9;
          text-align: center;
          padding: 2rem;
          margin-top: 3rem;
          border-top: 1px solid #eee;
        }

        .footer p {
          margin: 0;
          color: #666;
        }

        @media (max-width: 768px) {
          .main {
            padding: 1rem;
          }

          .nav-container {
            padding: 0 1rem;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </>
  )
}
