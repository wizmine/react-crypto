import React from "react";
import { Card, Flex, Layout, Statistic, List, Typography, Tag, Button } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { capitalize } from "../../utils/utils";
import { useCrypto } from "../../hooks/hooks";

const siderStyle = {
  padding: "1rem",
};

const AppSider = () => {
  const { assets, deleteAsset } = useCrypto();

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      {assets.map((asset) => (
        <Card key={asset.id} style={{ marginBottom: "1rem" }}>
          <Flex align="center" justify="space-between">
            <Statistic
              title={capitalize(asset.id)}
              value={asset.totalAmount}
              precision={2}
              valueStyle={{
                color: asset.grow ? "#3f8600" : "#cf1322",
              }}
              prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="$"
            />
            <Button type="primary" danger onClick={() => deleteAsset(asset)}>
              Delete
            </Button>
          </Flex>
          <List
            size="small"
            dataSource={[
              { title: "Total Profit", value: asset.totalProfit, withTag: true },
              { title: "Asset Amount", value: asset.amount, isPlain: true },
            ]}
            renderItem={(item) => (
              <List.Item>
                <span>{item.title}</span>
                <span>
                  {item.withTag && (
                    <Tag color={asset.grow ? "green" : "red"}>
                      {!asset.grow && "-"}
                      {asset.growPercent}%
                    </Tag>
                  )}
                  {item.isPlain && item.value}
                  {!item.isPlain && (
                    <Typography.Text type={asset.grow ? "success" : "danger"}>
                      {item.value.toFixed(2)}$
                    </Typography.Text>
                  )}
                </span>
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
};

export default AppSider;
