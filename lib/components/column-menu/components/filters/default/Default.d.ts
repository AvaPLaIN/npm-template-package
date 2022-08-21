/// <reference types="react" />
import { FilterType } from "../../../../table/hooks/useOnFilter";
interface IDefaultFilterProps {
    filter: FilterType;
    updateFilter: (id: string, filter: string) => void;
}
declare const DefaultFilter: ({ filter, updateFilter }: IDefaultFilterProps) => JSX.Element;
export default DefaultFilter;
//# sourceMappingURL=Default.d.ts.map