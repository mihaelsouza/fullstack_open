import React from 'react';

const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

const Content = ({ content }) => {
  return (
    <>
      {content.map((item, idx) => {
        return <Part
          key={idx}
          name={item.name}
          exercises={item.exercises}
        />;
      })}
    </>
  );
}

const Part = ({ name, exercises }) => {
  return (
    <>
      <p>{name} {exercises}</p>
    </>
  );
}

const Total = ({ content }) => {
  return (
    <>
      <p>
        Number of exercises {
          content.reduce((acc, val) => acc + val.exercises, 0)
        }
      </p>
    </>
  );
}

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  };

  return (
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  );
}

export default App;
