import React, { useState } from 'react';

const App = () => {
  const [newPerson, setNewPerson] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-123456'},
  ]);

  const checkName = (newName, nameList) => {
    const nameInList = nameList.filter((name) => name.name === newName);
    return nameInList.length ? true : false;
  }

  const handleChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkName(newPerson, persons)) alert(`${newPerson} is already in phonebook!`);
    else setPersons([
        ...persons,
        {name: newPerson, number: newNumber}
      ]);

    setNewPerson('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input value={newPerson} onChange={(ev) => handleChange(ev, setNewPerson)}/>
        </div>
        <div>
          Phone Number:
          <input value={newNumber} onChange={(ev) => handleChange(ev, setNewNumber)}/>
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map((person) => <li key={person.name}>{`${person.name} ${person.number}`}</li>)
        }
      </ul>
    </div>
  );
};

export default App;
