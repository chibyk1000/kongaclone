import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import AdminLayout from "../../components/AdminLayout";
import Sidebar from "../../components/Sidebar";
import { useGetAdminDataQuery } from "../../store/api";

const Dashboard = () => {
  const { data, isLoading, error } = useGetAdminDataQuery({
    refetchOnMountOrArgChange: true,
  });


  return (
  
       <AdminLayout>
      
         <p>dhdhdhdh</p>
       </AdminLayout>
  
  );
};

export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
 