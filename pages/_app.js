import { MoralisProvider } from "react-moralis";
import '../styles/reset.css'
import "../styles/globals.css";
import "../styles/style.scss";




function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
      <div className="bg">
        <Component {...pageProps} />

      </div>
    </MoralisProvider>

  );
}
export default MyApp;