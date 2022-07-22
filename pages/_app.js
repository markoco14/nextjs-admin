import 'antd/dist/antd.css';
import '../styles/globals.css';

import { makeServer } from "../mirage"

if (process.env.NODE_ENV === "development" &&typeof makeServer === "function") {
  makeServer({ environment: "development"})
} 
else if (
    process.env.NODE_ENV === "production" ||
    process.env.REACT_APP_DEMO
  ) {
    makeServer(); // For a live demo when deploying to Vercel
  }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
