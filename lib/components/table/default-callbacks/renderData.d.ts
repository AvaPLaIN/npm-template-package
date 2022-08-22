/// <reference types="react" />
declare const defaultRenderData: <DataType extends {
    [key: string]: any;
    id: string;
}, ColumnType extends {
    id: string;
}>(item: DataType, column: ColumnType) => JSX.Element;
export default defaultRenderData;
//# sourceMappingURL=renderData.d.ts.map