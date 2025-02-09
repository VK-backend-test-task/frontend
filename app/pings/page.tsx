import { columns } from "./columns";
import { Table } from "antd";
import { DefaultApi } from "../../api";

const api = new DefaultApi({ basePath: "http://localhost:3001" });
export default async function PingsPage() {
  const { data } = await api.pingsAggregateGet();
  return <Table columns={columns} dataSource={data} rowKey="ip"></Table>;
}
