import React, { useState, useEffect } from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import Table from "./components/Table";
import InfoBox from "./components/InfoBox";
import Leftpanel from "./components/Leftpanel";
import Population from "./components/Population";
import Statewise from "./components/Statewise";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [country, setCountry] = useState("worldwide");
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setTableData(data);
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/states")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setData(data);
      });
  };
  return (
    <>
      <div className="app">
        <div className="left">
          <h4>Country</h4>
          <h4>States</h4>
          <h4>Vaccine</h4>
        </div>
        <div className="leftpanel">
          <Leftpanel />
        </div>
        <div className="rightpanel">
          <div className="country-style">
            <div className="app__header">
              <h1>Select Country</h1>
              <FormControl className="app__dropdown">
                <Select
                  variant="outlined"
                  value={country}
                  onChange={onCountryChange}
                >
                  <MenuItem value="worldwide">Worldwide</MenuItem>
                  {countries.map((country) => (
                    <MenuItem value={country.value}>{country.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="card-style">
            <InfoBox title="Confirmed" cases={countryInfo.cases} />
            <InfoBox title="Active" cases={countryInfo.active} />
            <InfoBox title="Recovered" cases={countryInfo.recovered} />
            <InfoBox title="Deaths" cases={countryInfo.deaths} />
          </div>
          {/* <Card>
        <CardContent>
          <Table countries={tableData} />
        </CardContent>
      </Card> */}
          {/* to check the polation and otheer table */}
          <div className="population">
            <Population
              title="Population"
              population={countryInfo.population}
            />
            <Population
              title="Cases per Million"
              population={countryInfo.casesPerOneMillion}
            />
            <Population
              title="Active Ratio"
              population={countryInfo.activePerOneMillion}
            />
            <Population
              title="Recovery Ratio"
              population={countryInfo.recoveredPerOneMillion}
            />
            <Population
              title="Death Ratio"
              population={countryInfo.deathsPerOneMillion}
            />
          </div>
        </div>
        {/* <Statewise /> */}
      </div>
    </>
  );
}

export default App;
