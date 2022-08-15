/// <reference types="react" />
interface IPaginationProps {
    page: number;
    totalPages: number;
    onChangePage: (page: number) => void;
}
declare const Pagination: ({ page, totalPages, onChangePage }: IPaginationProps) => JSX.Element;
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map