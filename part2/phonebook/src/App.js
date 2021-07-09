import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import AddEntry from './components/AddEntry';
import NumberList from './components/NumberList';

const App = () => {
  const [filter, setFilter] = useState('');
  const [newPerson, setNewPerson] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([]);
  const [peopleToShow, setPeopleToShow] = useState(persons);

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(res => setPersons(res.data));
  }, []);

  useEffect(() => {
    setPeopleToShow(persons);
    setFilter('');
  }, [persons]);

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
    const person = {name: newPerson, number: newNumber};

    if (checkName(newPerson, persons)) alert(`${newPerson} is already in phonebook!`);
    else {
      setPersons([
        ...persons,
        person
      ]);
    }

    setNewPerson('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleFilter} />
      <h3>add new</h3>
      <AddEntry
        person={newPerson} setPerson={setNewPerson}
        number={newNumber} setNumber={setNewNumber}
        handleChange={handleChange} handleSubmit={handleSubmit}
      />
      <NumberList people={peopleToShow} />
    </div>
  );
};

export default App;
