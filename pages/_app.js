import ThemeProvider from '../components/ThemeProvider'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
