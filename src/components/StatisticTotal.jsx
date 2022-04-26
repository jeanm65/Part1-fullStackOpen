import React from "react";

const StatisticTotal = ({ text, total }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default StatisticTotal;
