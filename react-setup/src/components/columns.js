import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Name',
        accessor:'name',
    },
    {
        Header: 'Capital',
        accessor: 'capital',
        Filter: ColumnFilter,
    },
    {
        Header: 'Region',
        accessor: 'region',
    },
    {
        Header: 'Flag',
        accessor: 'flag',
    }
]