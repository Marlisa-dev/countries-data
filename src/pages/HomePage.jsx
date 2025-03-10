import React, { useEffect, useState } from 'react'
import CountryCard from '../components/CountryCard';
import Search from '../components/Search';
import FilterRegion from '../components/FilterRegion';
import { Link } from 'react-router-dom';


export const HomePage = () => {
    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                setFilteredCountries(data);

                const uniqueRegions = [...new Set(data.map((country) => country.region))];
                setRegions(uniqueRegions);
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);
    console.log(countries);

    const handleRegionSelect = (region) => {
        if (region === '') {
            setFilteredCountries(countries);
        } else {
            const filtered = countries.filter((country) => country.region === region);
            setFilteredCountries(filtered);
        }
    }

    const handleSearch = (query) => {
        const filtered = countries.filter((country) => {
            return country.name.common.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredCountries(filtered);
    }
  return (
    <>
        <div className="searchandfilter">
            <Search onSearch={handleSearch}/>
            <FilterRegion regions={regions} onSelect={handleRegionSelect}/>
        </div>
        
        <div className="countrylist">
            {filteredCountries.map((country) => (
                <Link to={`/country/${country.cca3}`} key={country.cca3}>
                    <CountryCard country={country} key={country.cca3} />
                </Link>
            ))}
        </div>
    </>



  )
}
