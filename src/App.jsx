import { useState } from "react";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //let's create a new Component called Button to handle the buttons events
  const handleGoodFeedb = () => setGood(good + 1);
  const handleNeutralFeedb = () => setNeutral(neutral + 1);
  const handleBadFeedb = () => setBad(bad + 1);
  const totalClicks = good + neutral + bad;
  const averageOfClicksNumber = totalClicks / 3;
  const positiveFeedb = (good * 100)/totalClicks;

  return (
    <div>
      <button onClick={handleGoodFeedb}>good</button>
      <button onClick={handleNeutralFeedb}>neutral</button>
      <button onClick={handleBadFeedb}>bad</button>
      <Statistics text='Statistics' good={good} neutral={neutral} bad={bad} total={totalClicks} average={averageOfClicksNumber} positiveFeed={positiveFeedb} />
    </div>
  );
};

export default App;
