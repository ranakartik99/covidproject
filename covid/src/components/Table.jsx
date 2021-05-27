import React from "react";

import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      <table>
        <tr>
          <th>Countries</th>
          <th>Population</th>
          <th>Cases per million</th>
          <th>active ratio</th>
        </tr>
        {countries.map((country) => (
          <tr>
            <td>{country.country}</td>
            <td>{country.country}</td>
            <td>{country.country}</td>
            <td>
              <strong>{country.cases}</strong>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
