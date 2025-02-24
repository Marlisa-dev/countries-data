import React from 'react'

const CountryCard = ({ country }) => {
  return (
    <div className='country-card'>
        <img src={country.flags.png} alt={country.name.common} />
        <h3>{country.name.common}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
    </div>
  )
}

export default CountryCard