import React from 'react'

const CountryDetails = ({ country }) => {

  return (
    <>
      {
        country ? (
          <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt="country flag"/>
          </div>
        ) : <></>
      }
    </>
  )
};

export default CountryDetails;