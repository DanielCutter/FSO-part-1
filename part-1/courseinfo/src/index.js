
import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
      <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
      </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p><strong>{props.part.name}:</strong> {props.part.exercises} </p>
    </div>
  )
}

const Total = (props) => {
  return (
      <p><strong>Number of exercises:</strong> {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
