import React from 'react';

const Statistics = ({text, good, neutral, bad, total, average, positiveFeed }) => {
    if(total === 0){
      return (
        <div>
          <p>No feedback given</p>
        </div>
      )
    }
  
  return (
    <div>
      <h1>{text}</h1>
      good {good} <br />
      neutral {neutral} <br />
      bad {bad} <br />
      All {total} <br />
      average {average} <br />
      positive {positiveFeed + '%'}
    </div>
  );
};

export default Statistics;