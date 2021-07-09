import React from 'react'

const AddEntry = ({
  person, setPerson,
  number, setNumber,
  handleChange, handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:
        <input value={person} onChange={(ev) => handleChange(ev, setPerson)}/>
      </div>
      <div>
        Phone Number:
        <input value={number} onChange={(ev) => handleChange(ev, setNumber)}/>
      </div>
      <button type="submit">add</button>
    </form>
  )
};

export default AddEntry;
