import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Name',
        accessor:'name',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Capital',
        accessor: 'capital',
        Filter: ColumnFilter,
    },
    {
        Header: 'Region',
        accessor: 'region',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Flag',
        accessor: 'flag',
        Filter: ColumnFilter,
        disableFilters: true,
        Cell: tableProps => (
            <img
              src={tableProps.row.original.flag}
              width={60}
              alt='Flag'
            />
          )
    }
]