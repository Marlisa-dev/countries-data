import React, { useState } from 'react'

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  }
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search for a country...'
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search