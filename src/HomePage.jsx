import React, { useEffect, useState } from 'react'
import CountryCard from './components/CountryCard';
import Search from './components/Search';
import Filter from './components/Filter';


export const HomePage = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error("Error fetching data: ", error));
            });
    }, []);
    console.log(countries);
  return (
    <>
        <div className="searchandfilter">
            <Search />
            <Filter />
        </div>
        
        <div className="countrylist">
            {countries.map((country) => (
                <CountryCard country={country} key={country.cca3} />
            ))}
        </div>

    </>



  )
}
