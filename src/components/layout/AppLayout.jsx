import React from "react";
import { Layout, Spin } from "antd";
import { useCrypto } from "../../hooks/hooks";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";

const AppLayout = () => {
  const { loading } = useCrypto();

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
