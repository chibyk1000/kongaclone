import { useState } from 'react';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [collapse, setCollapse] = useState(true);
  if (Component.getLayout) {
    return Component.getLayout(<Component{...pageProps}/>)
  }
  return (
    <>
      <div className="grid">
        <img src="/ads.webp" alt="" className="w-full" />
      </div>
      <Navbar setCollapse={setCollapse} />
      <Component {...pageProps} />
      <Footer />

      <Login collapse={collapse} setCollapse={setCollapse} />
    </>
  );
}

export default MyApp
