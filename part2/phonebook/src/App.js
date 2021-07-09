import React, { useState } from 'react';

const App = () => {
  const [newPerson, setNewPerson] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [peopleToShow, setPeopleToShow] = useState(persons);

  const checkName = (newName, nameList) => {
    const nameInList = nameList.filter((name) => name.name === newName);
    return nameInList.length ? true : false;
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilter(value);

    if (value !== '') {
      const people = persons.filter((person) =>
        person.name.toLowerCase().includes(value.toLowerCase())
      );

      setPeopleToShow(people);
    } else setPeopleToShow([...persons]);
  };

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
      <div>
        Filter shown with:
        <input value={filter} onChange={handleFilter}/>
      </div>
      <h3>add new</h3>
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
          peopleToShow.map((person) => <li key={person.name}>{`${person.name} ${person.number}`}</li>)
        }
      </ul>
    </div>
  );
};

export default App;
