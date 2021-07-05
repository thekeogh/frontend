import "../css/global.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        HEADER
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        FOOTER
      </footer>
    </div>
  );
}
export default MyApp;
