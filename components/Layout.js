import Link from 'next/link'
import Head from 'next/head'
import ThemeToggle from './ThemeToggle'
import ScrollToTop from './ScrollToTop'

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
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>Удачных кадров! 📷✨</p>
      </footer>
      <ScrollToTop />
    </>
  )
}
