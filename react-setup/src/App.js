import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
    .get("https://restcountries.com/v2/all")
    .then(response => setCountries(response.data))
    .catch(error => console.log({ error}));
  }, []);

  return (
    <div className="App">
      <h1>React</h1>
      {countries.map(country => {
      return (
      <div key={country.name}>
        <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">capital</th>
      <th scope="col">region</th>
      <th scope="col">flag</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{country.name}</th>
      <td>{country.capital}</td>
      <td>{country.region}</td>
      <td><img src={country.flag} class="img-fluid" alt={country.name}></img></td>
    </tr>
  </tbody>
</table>
      </div>
      ); 
      })}
    </div>
  );
}

