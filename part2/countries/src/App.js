import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';

function App() {
  const [countries, setCountries] = useState([]);
  const [selection, setSelection] = useState(countries);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => setCountries(res.data));
  }, []);

  useEffect(() => {
    setSelection(countries);
  }, [countries]);

  const handleChange = (event) => {
    const value = event.target.value;

    if (value !== '') {
      const selectedCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase()));

        setSelection(selectedCountries);
    } else setSelection(countries);

    setFilter(value);
  };

  return (
    <div>
      <label>
        find countries:
        <input value={filter} onChange={handleChange}/>
      </label>
      {
        selection.length > 10
          ? <p>Too many matches, refine your filter</p>
          : <CountryList countries={selection}/>
      }
    </div>
  );
}

export default App;
