import React, { useState } from 'react'

const FilterRegion = ({ regions, onSelect }) => {
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleChange = (event) => {
        const region = event.target.value;
        setSelectedRegion(region);
        onSelect(region);

    }

  return (
    <div className='filter-region'>
        <select value={selectedRegion} onChange={handleChange}>
            <option value="">Filter by Region</option>
            {regions.map((region) => (
                <option value={region} key={region}>
                    {region}
                </option>
            ))}
        </select>
    </div>
  )
}

export default FilterRegion