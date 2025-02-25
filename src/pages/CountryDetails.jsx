import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const CountryDetails = () => {
  const { countryCode } = useParams()
  const [country, setCountry] = useState(null)
  const [borderCountries, setBorderCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) => {
        const countryData = data[0];
        setCountry(countryData)

        if(countryData.borders){
          fetch(`https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(';')}`)
              .then((response) => response.json())
              .then((borderData) => setBorderCountries(borderData))
              .catch((error) => console.log("Error fetching border countries: ", error))
        }
      })
      .catch((error) => console.log("Error fetching country info: ", error));
  }, [countryCode]);

  if(!country) return <div>Loading...</div>

  return (
    <>
      <Button onClick={() => navigate(-1)} name="Back"/>
      <div className='country-details'>
        <div className="country-image">
          <img src={country.flags.png} alt={country.name.common} />
        </div>

        <div className="country-information">
          <h3>{country.name.common}</h3>
          <div className="country-description">
            <div className="left">
              <p>Native Name: {country.name}</p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Sub Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>

            <div className="right">
              <p>Top Level Domain: {country.tld}</p>
              <p>Currencies: {Object.values(country.currencies).map((currency) => currency.name).join(',')}</p>
              <p>Languages: {Object.values(country.languages).join(',')}</p>
            </div>
          </div>

          <p><strong>Border Countries: </strong></p>
          <div className="border-countries">
            {borderCountries.length > 0 ? (
              borderCountries.map((borderCountry) => (
                <Button 
                  key={borderCountry.cca3} 
                  onClick={() => navigate(`/country/${borderCountry.cca3}`)} 
                  name={borderCountry.name.common} 
                  {...borderCountry.name.common}/>
              ))
            ) : (
              <p>None</p>
            )}
          </div>

        </div>




      </div>
    </>

  )
}

export default CountryDetails