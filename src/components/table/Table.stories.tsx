import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import users from "../../data/users.json";
import Table from "./Table";

export default {
  title: "Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});

type Width = {
  minWidth?: number;
  defaultWidth?: string | number;
};

type Column = {
  id: string;
  label: string;
  filter?: string;
  sort?: boolean;
  width?: Width;
};

type Data = {
  id: string;
  name: string;
  age: number;
  state: string;
};

const columns: Column[] = [
  {
    id: "name",
    label: "Name",
    sort: true,
    width: { minWidth: 300, defaultWidth: "1fr" },
  },
  {
    id: "age",
    label: "Age",
    sort: true,
    width: { defaultWidth: 200 },
  },
  {
    id: "state",
    label: "State",
    sort: true,
    width: { minWidth: 300, defaultWidth: 400 },
  },
];

const handleColumnKeyExtractor = (item: Column) => item.id;
const handleRenderColumn = (item: Column) => item.label;

const handleDataKeyExtractor = (item: Data) => {
  return `${item.name}-${item.age}-${item.state}`;
};

const handleRenderData = (item: Data, column: Column) => {
  return (
    <td key={`${item.name}-${column.id}`}>
      <span>{item[column.id as keyof Data]}</span>
    </td>
  );
};

Primary.args = {
  columns: columns,
  columnKeyExtractor: handleColumnKeyExtractor,
  renderColumnItem: handleRenderColumn,
  data: users,
  dataKeyExtractor: handleDataKeyExtractor,
  renderData: handleRenderData,
};
