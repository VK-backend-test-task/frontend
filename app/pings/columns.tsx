"use client";

import { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<{
  last_ping: string;
  last_success: string;
  ip: string;
}> = [
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
    sorter: (a, b) => +new Date(a.last_ping) - +new Date(b.last_ping),
    render(v, r) {
      return new Date(v).toLocaleString();
    },
  },
  {
    key: "last_success",
    dataIndex: "last_success",
    title: "Last Success",
    sorter: (a, b) => +new Date(a.last_success) - +new Date(b.last_success),
    render(v) {
      return new Date(v).toLocaleString();
    },
  },
];
