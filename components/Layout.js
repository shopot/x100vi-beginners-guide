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
      <style jsx global>{`
        :root {
          /* High-Contrast Minimalist - Light Theme */
          /* Deep Navy + Crisp White + Terracotta */
          --bg-primary: #ffffff; /* Crisp white */
          --bg-secondary: #fafafa; /* Very light gray */
          --bg-tertiary: #f5f5f5; /* Light gray */
          --text-primary: #0f1419; /* Deep navy */
          --text-secondary: #2c2c2c; /* Charcoal */
          --text-tertiary: #4a4a4a; /* Medium gray */
          --accent: #e07a5f; /* Terracotta */
          --accent-hover: #c85a3a; /* Darker terracotta */
          --border: #e0e0e0; /* Light border */
          --border-dark: #d0d0d0; /* Medium border */
          --nav-bg: #0f1419; /* Deep navy */
          --nav-text: #ffffff; /* Crisp white */
          --code-bg: #f8f8f8; /* Very light gray */
          --code-text: #0f1419; /* Deep navy */
          --pre-bg: #0f1419; /* Deep navy */
          --pre-text: #ffffff; /* Crisp white */
          --table-header-bg: #f5f5f5; /* Light gray */
          --table-row-bg: #fafafa; /* Very light gray */
          --shadow: rgba(15, 20, 25, 0.1); /* Deep navy shadow */
          --shadow-hover: rgba(15, 20, 25, 0.15); /* Darker shadow */
        }

        [data-theme='dark'] {
          /* High-Contrast Minimalist - Dark Theme */
          /* Soft Navy + Soft White + Terracotta */
          --bg-primary: #1e2329; /* Softer navy - easier on eyes */
          --bg-secondary: #252a32; /* Lighter navy */
          --bg-tertiary: #2d323a; /* Medium navy */
          --text-primary: #e5e5e5; /* Soft white - easier on eyes */
          --text-secondary: #d0d0d0; /* Light gray */
          --text-tertiary: #a0a0a0; /* Medium gray */
          --accent: #ff8c42; /* Bright terracotta/amber */
          --accent-hover: #ff6b1a; /* Brighter terracotta */
          --border: #3a3f47; /* Softer border */
          --border-dark: #454a52; /* Lighter border */
          --nav-bg: #1a1f26; /* Dark navy for nav */
          --nav-text: #e8e8e8; /* Soft white for nav */
          --code-bg: #252a32; /* Lighter navy for code */
          --code-text: #e5e5e5; /* Soft white */
          --pre-bg: #252a32; /* Lighter navy for pre */
          --pre-text: #e5e5e5; /* Soft white */
          --table-header-bg: #252a32; /* Lighter navy */
          --table-row-bg: #1e2329; /* Softer navy */
          --shadow: rgba(0, 0, 0, 0.3); /* Softer shadow */
          --shadow-hover: rgba(0, 0, 0, 0.4); /* Softer hover shadow */
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          line-height: 1.7;
          color: var(--text-primary);
          background-color: var(--bg-primary);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .nav {
          background-color: var(--nav-bg);
          color: var(--nav-text);
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
          background-color: rgba(15, 20, 25, 0.95); /* Deep navy with transparency */
        }

        [data-theme='dark'] .nav {
          background-color: rgba(26, 31, 38, 0.95); /* Softer dark navy with transparency */
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
          color: var(--nav-text);
          transition: opacity 0.2s ease;
        }

        .nav-logo:hover {
          opacity: 0.8;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-links a {
          color: var(--nav-text);
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .nav-links a:hover {
          opacity: 0.7;
        }

        .theme-toggle {
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 8px;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--nav-text);
        }

        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        .theme-toggle:active {
          transform: scale(0.95);
        }

        .theme-toggle:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .theme-icon {
          font-size: 1.25rem;
          line-height: 1;
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
          color: var(--text-primary);
          font-weight: 700;
        }

        h2 {
          font-size: 2rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: var(--text-primary);
          font-weight: 600;
        }

        h3 {
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        h4 {
          font-size: 1.25rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        p {
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        ul,
        ol {
          margin-bottom: 1rem;
          padding-left: 2rem;
        }

        li {
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        a {
          color: var(--accent);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        a:hover {
          color: var(--accent-hover);
          text-decoration: underline;
        }

        blockquote {
          border-left: 4px solid var(--accent);
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: var(--text-secondary);
          font-style: italic;
          background: var(--bg-secondary);
          padding: 1rem 1rem 1rem 1.5rem;
          border-radius: 0 8px 8px 0;
        }

        code {
          background-color: var(--code-bg);
          color: var(--code-text);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Courier New',
            monospace;
          font-size: 0.9em;
        }

        pre {
          background-color: var(--pre-bg);
          color: var(--pre-text);
          padding: 1.25rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1.5rem 0;
          box-shadow: 0 2px 8px var(--shadow);
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
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
        }

        table th,
        table td {
          border: 1px solid var(--border);
          padding: 0.75rem;
          text-align: left;
        }

        table th {
          background-color: var(--table-header-bg);
          font-weight: 600;
          color: var(--text-primary);
        }

        table tr:nth-child(even) {
          background-color: var(--table-row-bg);
        }

        table tr:hover {
          background-color: var(--bg-tertiary);
        }

        hr {
          border: none;
          border-top: 2px solid var(--border);
          margin: 2rem 0;
        }

        img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5rem 0;
          box-shadow: 0 4px 12px var(--shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        img:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px var(--shadow-hover);
        }

        .footer {
          background-color: var(--bg-secondary);
          text-align: center;
          padding: 2rem;
          margin-top: 3rem;
          border-top: 1px solid var(--border);
        }

        .footer p {
          margin: 0;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .main {
            padding: 1rem;
          }

          .nav-container {
            padding: 0 1rem;
          }

          .nav-links {
            gap: 1rem;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.75rem;
          }

          .theme-toggle {
            width: 2.25rem;
            height: 2.25rem;
          }
        }
      `}</style>
    </>
  )
}
