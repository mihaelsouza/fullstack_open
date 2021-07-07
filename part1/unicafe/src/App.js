import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

const Statistics = ({ text, values }) => {
  const total = Object.values(values).reduce((acc,val) => acc + val);
  const average = (values.good - values.bad) / total;
  const positive = values.good / total * 100;

  return (
    <div>
      <h1>{text}</h1>
      {
        total > 0 ? (
          <table>
            <tbody>
              <Statistic text="good" value={values.good}/>
              <Statistic text="neutral" value={values.neutral}/>
              <Statistic text="bad" value={values.bad}/>
              <Statistic text="total" value={total}/>
              <Statistic text="average" value={average}/>
              <Statistic text="positive" value={`${positive} %`}/>
            </tbody>
          </table>
        ) : (
          <p>No feedback given</p>
        )
      }
    </div>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  return (
    <div className="App">
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics text="statistics" values={stats}/>
    </div>
  );
}

export default App;
