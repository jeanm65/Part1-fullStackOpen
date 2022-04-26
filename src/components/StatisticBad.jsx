import React from "react";

const StatisticBad = ({ text, badClick }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{badClick}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default StatisticBad;
