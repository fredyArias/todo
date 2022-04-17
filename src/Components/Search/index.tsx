import React, { useState } from 'react'

function Search() {

    const [searchValue, setSearchValue] = useState('')

    function getValue(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

  return (
    <div>
        <input 
            className='search'
            value={searchValue}
            placeholder={'Write'}
            onChange={getValue}
        />
        <p>{searchValue}</p>
    </div>
  )
}

export default Search