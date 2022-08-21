/// <reference types="react" />
import { FilterType } from "../../../../table/hooks/useOnFilter";
interface INumberFilterProps {
    filter: FilterType;
    updateFilter: (id: string, filter: string) => void;
}
declare const NumberFilter: ({ filter, updateFilter }: INumberFilterProps) => JSX.Element;
export default NumberFilter;
//# sourceMappingURL=Number.d.ts.map