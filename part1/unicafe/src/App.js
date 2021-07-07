import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

const Display = ({ text, values }) => {
  const style = {
    lineHeight: 0,
  }

  return (
    <>
      <h1>{text}</h1>
      <p style={style}>good: {values.good}</p>
      <p style={style}>neutral: {values.neutral}</p>
      <p style={style}>bad: {values.bad}</p>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad
  };

  return (
    <div className="App">
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Display text="statistics" values={stats}/>
    </div>
  );
}

export default App;
