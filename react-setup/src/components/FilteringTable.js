import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { GlobalFilter  } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'

 


export const FilteringTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const defaultColumn = useMemo(
        () => ({
          // Let's set up our default Filter UI
          Filter: ColumnFilter,
        }),
        []
      )  

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, 
        state, 
        setGlobalFilter,
    } = useTable
    (
        {
        columns: columns,
        data: data,
        defaultColumn
        },
        useFilters,
        useGlobalFilter
    )

    const { globalFilter } = state

    return (
        <div class="container p-3 mb-2 bg-light text-dark">
            
        <>
        <div class="row">
        <div class="col-sm">
        <GlobalFilter filter={globalFilter} 
        setFilter={setGlobalFilter} />
        </div>
        </div>
        
        <div class="row">
        <div class="col-sm">
        <table class="table table-dark" {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps}>
            {
                headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}
                    <div>
                        {column.canFilter ? column.render('Filter') : null} 
                    <div/>
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
                      return  <td  {...cell.getCellProps()}>{cell.render('Cell')}</td>  
                    })}
               
              </tr>
            )
        })
    }
   
            </tbody>
        </table>
        </div>
        </div>
        </>
        </div>
    )

}