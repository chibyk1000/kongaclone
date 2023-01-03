import { useState } from 'react';
import { Provider } from 'react-redux';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { store } from '../store/store'
import  {useGetUserDataQuery} from '../store/api'
import Layout from '../components/Layout';
import AdminLayout from '../components/AdminLayout';

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [collapse, setCollapse] = useState(true);


  

  if (Component.getLayout) {

    return (
   

      
        Component.getLayout(
                <Provider store={store}>
            


     
<Component{...pageProps} />
            
 
      
                </Provider>
            )
      
    
    
    )
  }
  return (
    <>
      <Provider store={store}>
        <Layout>
          

      <Component {...pageProps} />
     
</Layout>
      </Provider>
    </>
  );
}

export default MyApp


