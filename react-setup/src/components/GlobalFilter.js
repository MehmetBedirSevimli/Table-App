import React from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div class="input-group mb-3">
    <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">
        Search: {' '}
        <input class="form-control" aria-describedby="basic-addon1" value = {filter || ''}
        onChange={(e) => setFilter(e.target.value)} 
        />
    </span>
    </div>
    </div>
  )
}
       