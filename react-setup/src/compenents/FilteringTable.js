import React, { useMemo } from 'react'
import {useTable, useGlobalFilter, useFilters } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { GlobalFilter  } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import './App.css'
 


export const FilteringTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
const tableInstance = useTable({
        columns,
        data,
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows , prepareRow, state, setGlobalFilter,} = useTable({
        columns, data,

    },
    useFilters,
     useGlobalFilter
     )

    const { globalFilter } = state
    return (
        <>

        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        
        <table class="table table-dark" {...getTableProps()}>
  <thead>
    {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps}>
            {
                headerGroup.headers.map((column) => (
                    <th scope="col" {...column.getHeaderProps()}>{column.render('Header')}
                    <div>
                        {column.canFilter ? column.render('Filter')} : null} <div/>
                    </div>
                    </th>
                ))
            }
        
      </tr>
    ))

    }
  </thead>
  <tbody {...getTableBodyProps()}>
    {
        rows.map((row) => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return  <td scope="row" {...cell.getCellProps()}>{cell.render('Cell')}</td>  
                    })}
               
              </tr>
            )
        })
    }
   
  </tbody>
</table>
</>
    )

}