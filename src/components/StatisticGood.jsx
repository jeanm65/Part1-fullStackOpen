import React from "react";

const StatisticGood = ({ text, goodClick }) => {
  return (
    <>
      <table style={{'td': '1px solid black'}}>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{goodClick}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default StatisticGood;
