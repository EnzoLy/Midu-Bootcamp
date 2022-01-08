import React from 'react'
import Title from './components/Title.jsx'
import Paragraph from './components/Paragraph.jsx'


const App = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Title course = 'Half Stack application development'/>
      <Paragraph part='Fundamentals of React' exercise='10' />
      <Paragraph part='Using props to pass data' exercise='7' />
      <Paragraph part='State of a component' exercise='14' />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App;