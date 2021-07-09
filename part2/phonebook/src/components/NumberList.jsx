import React from 'react'

const NumberList = ({ people }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {
          people.map((person) => <li key={person.name}>{`${person.name} ${person.number}`}</li>)
        }
      </ul>
    </div>
  )
};

export default NumberList;
