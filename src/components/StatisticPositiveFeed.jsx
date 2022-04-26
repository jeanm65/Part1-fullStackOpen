import React from "react";

const StatisticPositiveFeed = ({ text, positiveFeed }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{positiveFeed + "%"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default StatisticPositiveFeed;
