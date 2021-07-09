import React, { useState } from 'react';

const App = () => {
  const [newPerson, setNewPerson] = useState('');
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'},
  ]);

  const checkName = (newName, nameList) => {
    const nameInList = nameList.filter((name) => name.name === newName);
    return nameInList.length ? true : false;
  }

  const handleChange = (event) => {
    setNewPerson(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkName(newPerson, persons)) alert(`${newPerson} is already in phonebook!`);
    else setPersons([
        ...persons,
        {name: newPerson}
      ]);

    setNewPerson('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input value={newPerson} onChange={handleChange}/>
        </label>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map((person) => <li key={person.name}>{person.name}</li>)
        }
      </ul>
    </div>
  );
};

export default App;
