import React from 'react';
import Part from './Part';

const Content = (props) => {
  return (
    <div>
      <Part parts={props.partsNames} exercises={props.partsExercises} />
    </div>
  );
};

export default Content;