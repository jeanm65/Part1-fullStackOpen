import React from 'react';

const StatisticNeutral = ({text, neutralClick}) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{neutralClick}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default StatisticNeutral;