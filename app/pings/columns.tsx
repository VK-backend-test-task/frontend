"use client";

import { ContainerInfo } from "@/api";
import { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<ContainerInfo> = [
  {
    title: "IP",
    key: "ip",
    dataIndex: "ip",
    sorter: (a, b) => a.ip.localeCompare(b.ip),
  },
  {
    key: "last_ping",
    dataIndex: "last_ping",
    title: "Last Ping",
    sorter: (a, b) => +new Date(a.last_ping ?? 0) - +new Date(b.last_ping ?? 0),
    render(v) {
      return new Date(v).toLocaleString();
    },
  },
  {
    key: "last_success",
    dataIndex: "last_success",
    title: "Last Success",
    sorter: (a, b) =>
      +new Date(a.last_success ?? 0) - +new Date(b.last_success ?? 0),
    render(v) {
      return new Date(v).toLocaleString();
    },
  },
];
