import React from "react";
import "./CountryData.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CountryCards from "./CountryCards";
import "./CountryData.css";

function CountryData() {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(res.data);
        setCountryData(res.data);
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after receiving the response (success or error)
      });
  }, []);

  return (
    <div>
      <h1 className="text-center m-3">Country App</h1>
      <input
        id="search"
        type="text"
        placeholder="Search Your Country"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <hr />
      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : errorMessage ? (
        <h2 className="error">{errorMessage}</h2>
      ) : (
        <CountryCards cards={countryData} searchValue={search} />
      )}
    </div>
  );
}
export default CountryData;
