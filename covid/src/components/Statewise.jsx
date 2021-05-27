import React, { useState, useEffect } from "react";

const Statewise = () => {
  //   const getCovidData = async () => {
  //     const res = await fetch("https://disease.sh/v3/covid-19/states");
  //     const actualData = res.join();
  //     console.log(actualData);
  //   };
  //   useEffect(() => {
  //     getCovidData();
  //   }, []);

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/states")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      <h1>Here it shows the state Data</h1>
      {/* {data.map((data) => (
            <tr>
            <td>{data}</td>
            </tr>
        ))} */}
    </div>
  );
};

export default Statewise;
