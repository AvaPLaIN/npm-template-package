import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import columns from "../../data/columns.json";
import users from "../../data/users.json";
import { Data } from "../../data/users.types";
import { FilterType } from "./hooks/useOnFilter";
import { SortType } from "./hooks/useOnSort";
import Table, { Column } from "./Table";

export default {
  title: "Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <div style={{ height: "95vh" }}>
    <Table {...args} />
  </div>
);

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

const defaultArgs = {
  columns: columns as Column[],
  columnKeyExtractor: handleColumnKeyExtractor,
  renderColumnItem: handleRenderColumn,
  data: users,
  dataKeyExtractor: handleDataKeyExtractor,
  renderData: handleRenderData,
};

export const ClientSide = Template.bind({});
ClientSide.args = defaultArgs;

const handleFetchDataOnPagination = async (
  page: number,
  limit: number,
  sort: SortType,
  filter: FilterType
) => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [...users]
            .sort((a: any, b: any) => {
              if (sort?.sortBy?.value === "asc") {
                return a[sort?.sortBy?.id] > b[sort?.sortBy?.id] ? 1 : -1;
              }
              if (sort?.sortBy?.value === "desc") {
                return a[sort?.sortBy?.id] < b[sort?.sortBy?.id] ? 1 : -1;
              }
              return 0;
            })
            .slice((page - 1) * limit, page * limit),
          hasNextPage: users.length > page * limit,
        }),
      1000
    )
  );
};

export const ServerSide = Template.bind({});
ServerSide.args = {
  ...defaultArgs,
  isServerSide: true,
  fetchDataOnPagination: handleFetchDataOnPagination,
};

const ColumnData = ({ value }) => {
  return <input type="text" defaultValue={value} />;
};
const handleRenderDataWithCustomComponent = (item: Data, column: Column) => {
  return (
    <td key={`${item.name}-${column.id}`}>
      <ColumnData value={item[column.id as keyof Data]} />
    </td>
  );
};

export const CustomDataRow = Template.bind({});
CustomDataRow.args = {
  ...defaultArgs,
  renderData: handleRenderDataWithCustomComponent,
};

export const ColumnSorting = Template.bind({});
ColumnSorting.args = {
  ...defaultArgs,
};

export const ColumnFiltering = Template.bind({});
ColumnFiltering.args = {
  ...defaultArgs,
};

export const SelectableRows = Template.bind({});
SelectableRows.args = {
  ...defaultArgs,
  selectable: true,
};

export const WithContextMenu = Template.bind({});
WithContextMenu.args = {
  ...defaultArgs,
  selectable: true,
  contextMenu: true,
};

export const WithoutResize = Template.bind({});
WithoutResize.args = {
  ...defaultArgs,
  resizable: false,
};

export const WithRowLimit = Template.bind({});
WithRowLimit.args = {
  ...defaultArgs,
  limit: 10,
};
