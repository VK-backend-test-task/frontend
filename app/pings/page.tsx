import { columns } from "./columns";
import { Table } from "antd";
import { Configuration, DefaultApi } from "../../api";

const api =
  process.env.API_HOST &&
  new DefaultApi(
    new Configuration({ basePath: `http://${process.env.API_HOST}` }),
  );

export const revalidate = 10;

export default async function PingsPage() {
  if (!api) return <div>Loading...</div>;
  const { data } = await api.pingsAggregateGet();
  return <Table columns={columns} dataSource={data} rowKey="ip"></Table>;
}
