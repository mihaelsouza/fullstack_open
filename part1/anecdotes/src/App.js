import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return <button
      onClick={handleClick}
    >{text}</button>;
}

const Anecdote = ({ header, text, voteCount }) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{text}</p>
      <p>{`has ${voteCount} votes`}</p>
    </div>
  );
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
    mostVotes: 0,
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
      mostVotes:
        votes[selected.index] > votes[selected.mostVotes] ? selected.index : selected.mostVotes,
    });
  };

  return (
    <div>
      <Anecdote
        header="Anecdote of the day"
        text={anecdotes[selected.index]}
        voteCount={selected.votes[selected.index]}
      />
      <Button text="vote" handleClick={handleVote}/>
      <Button text="next anecdote" handleClick={handleNext}/>
      <Anecdote
        header="Anecdote with most votes"
        text={anecdotes[selected.mostVotes]}
        voteCount={selected.votes[selected.mostVotes]}
      />
    </div>
  )
}

export default App;
