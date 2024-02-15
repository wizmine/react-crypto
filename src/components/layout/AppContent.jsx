import React from "react";
import { Layout, Typography } from "antd";
import { useCrypto } from "../../hooks/hooks";
import { firstNumberCheck } from "../../utils/utils";
import PortfolioChart from "../PortfolioChart";
import AssetsTable from "../AssetsTable";

const contentStyle = {
  padding: "1rem",
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  color: "#fff",
  backgroundColor: "#001529",
};

const AppContent = () => {
  const { assets, crypto } = useCrypto();

  const cryptoPriceMap = crypto.reduce((state, coin) => {
    state[coin.id] = coin.price;
    return state;
  }, {});

  const totalAmount = assets
    .map((asset) => asset.amount * cryptoPriceMap[asset.id])
    .reduce((state, value) => (state += value), 0);

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ textAlign: "left", color: "#fff" }}>
        Portfolio: {firstNumberCheck(totalAmount)}$
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
};

export default AppContent;
