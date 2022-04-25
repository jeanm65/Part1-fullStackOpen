import React from 'react';
import StatisticAverage from './StatisticAverage';
import StatisticBad from './StatisticBad';
import StatisticGood from './StatisticGood';
import StatisticNeutral from './StatisticNeutral';
import StatisticPositiveFeed from './StatisticPositiveFeed';
import StatisticTotal from './StatisticTotal';

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
      <StatisticGood text='good' goodClick={good} /> 
      <StatisticNeutral text='neutral' neutralClick={neutral} /> 
      <StatisticBad text='bad' badClick={bad}/>
      <StatisticTotal text='total' total={total} /> 
      <StatisticAverage text='average' average={average} /> 
      <StatisticPositiveFeed text='positive' positiveFeed={positiveFeed} /> 
    </div>
  );
};

export default Statistics;