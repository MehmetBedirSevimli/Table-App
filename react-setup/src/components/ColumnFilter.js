import React from 'react'

export const ColumnFilter = ({ column}) => {
    const { filterValue, setFilter } = column
    return (
        <div class="input-group mb-3">
        <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">
            Search:{' '}
            <input aria-describedby="basic-addon1" value={filterValue || ''}
             onChange={(e) => setFilter(e.target.value)}
            />
        </span>
        </div>
    </div>
    )
}