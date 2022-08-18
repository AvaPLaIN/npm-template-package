/// <reference types="react" />
import { FilterType } from "../../../table/hooks/useOnFilter";
interface IContainsProps {
    filter: FilterType;
    updateFilter: (id: string, filter: string) => void;
}
declare const Contains: ({ filter, updateFilter }: IContainsProps) => JSX.Element;
export default Contains;
//# sourceMappingURL=Default.d.ts.map