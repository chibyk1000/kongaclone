import Head from 'next/head';
import React from 'react'
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

const AdminLayout = ({children}) => {
    const { collapse } = useSelector((state) => state.appSlice);
  return (
    <div>
      <Head>
        <title>Konga Clone Admin</title>
        <meta name="description" content="this is a  konga clone by codebyte" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dashboard  flex relative">
        <Sidebar />
        <div
          className={`name   min-h-screen ease-in-out duration-500 transition-all ${
            collapse ? "w-screen" : " w-[90%] ml-60"
          }   `}
              >
                  
{children}

        </div>
      </div>
    </div>
  );
}

export default AdminLayout