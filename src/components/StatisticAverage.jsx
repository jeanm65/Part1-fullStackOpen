import React from 'react';

const StatisticAverage = ({text, average}) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{average}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default StatisticAverage;