import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = 'half Stack application development';
  const part1 = {
    name: 'fundamentals of React',
    exercises1: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises2: 7
  } 
  const part3 = {
    name: 'State of component',
    exercises3: 14
  }
  return(
    <div>
      <Header name={course} />
      <Content part1={part1.name} exercises1={part1.exercises1} part2={part2.name} exercises2={part2.exercises2} part3={part3.name} exercises3={part3.exercises3} />
      <Total exercises1={part1.exercises1} exercises2={part2.exercises2} exercises3={part3.exercises3} />
    </div>
  )
}

export default App;