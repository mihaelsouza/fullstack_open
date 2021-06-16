import React from 'react';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

const Content = (props) => {
  return (
    <>
      {props.content.map((item, idx) => {
        return <Part
          key={idx}
          part={item.part}
          exercises={item.exercises}
        />;
      })}
    </>
  );
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  );
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.content.reduce((acc, val) => {
          return acc + val.exercises;
        }, 0)}
      </p>
    </>
  );
}

const App = () => {
  const course = 'Half stack application development'
  const content = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  );
}

export default App;
