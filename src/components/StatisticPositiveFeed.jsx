import React from 'react';

const StatisticPositiveFeed = ({text, positiveFeed}) => {
  return (
    <div>
      {text} {positiveFeed + '%'}
    </div>
  );
};

export default StatisticPositiveFeed;