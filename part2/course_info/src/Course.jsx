import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, val) => acc + val.exercises, 0)
  return(
    <p style={{ fontWeight: 700 }}>{`total of ${sum} exercises`}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {
        course.parts.map((part) =>
          <Part key={part.id} part={part} />
        )
      }
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course