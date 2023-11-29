import "@/styles/globals.css";
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  <ThemeProvider attribute="class">

        return <Component {...pageProps} />;
  </ThemeProvider>
}
