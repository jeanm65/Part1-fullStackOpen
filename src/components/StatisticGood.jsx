import React from 'react';

const StatisticLine = ({text, goodClick}) => {
  return (
    <div>
      {text} {goodClick} <br />
    </div>
  );
};

export default StatisticLine;