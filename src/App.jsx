import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = "half Stack application development";
  const parts = [
    {
      name: "fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of component",
      exercises: 14,
    },
  ];
  const partsNames = parts.map((part, index) => (
    <p key={index}>
      {part.name} {part.exercises}
    </p>
  ));

  const partsExercises = parts.map((part) => part.exercises);
  const totalExercises = partsExercises.reduce((acc, val) => acc + val);

  return (
    <div>
      <Header name={course} />
      <Content partsNames={partsNames} />
      <Total totalExercises={totalExercises} />
    </div>
  );
};

export default App;
