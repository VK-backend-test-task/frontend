"use client";

import { ContainerInfo } from "../../api";
import { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<ContainerInfo> = [
  {
    title: "IP",
    key: "ip",
    dataIndex: "ip",
  },
  {
    key: "lastPing",
    dataIndex: "lastPing",
    title: "Last Ping",
    sorter: (a, b) => a.ip.localeCompare(b.ip),
  },
  {
    key: "lastSuccess",
    dataIndex: "lastSuccess",
    title: "Last Success",
  },
];
