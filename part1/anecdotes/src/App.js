import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return <button
      onClick={handleClick}
    >{text}</button>;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ];

  const [selected, setSelected] = useState({
    index: 0,
    votes: Array(anecdotes.length).fill(0),
  })

  const handleNext = () => {
    const newNumber = Math.floor(Math.random() * anecdotes.length);

    if (newNumber === selected.index) handleNext();
    else setSelected({ ...selected, index: newNumber });
  };

  const handleVote = () => {
    const votes = [...selected.votes];
    votes[selected.index] = votes[selected.index] + 1;

    setSelected({
      ...selected,
      votes: votes,
    });
  };

  return (
    <div>
      <p>{anecdotes[selected.index]}</p>
      <p>{`has ${selected.votes[selected.index]} votes`}</p>
      <Button text="vote" handleClick={handleVote}/>
      <Button text="next anecdote" handleClick={handleNext}/>
    </div>
  )
}

export default App;
