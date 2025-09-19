import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

//1.use hook for API
const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  //3.useState for
  const [visitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedFlag = (flag) => {
    // console.log('flag',flag);
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };
  //2.useState for total visited amount and list
  const [visitedCountries, setVisitedCountries] = useState([]);
  //events handler function for
  const handleVisitedCountries = (country) => {
    // console.log("clicked handleVisitedCountries", country);
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
    // const newVisitedCountry = [...visitedCountries, country];
    // setVisitedCountries(newVisitedCountry);
  };

  return (
    <div>
      {/* total amount of countries */}
      <h1>In the countries: {countries.length}</h1>
      <div className="visited-container">
        {/* total amount of visited */}
        <h3>Total Visited Country: {visitedCountries.length}</h3>

        {/* list of visited country */}
        <ol>
          {visitedCountries.map((visitedCountry) => (
            <li key={visitedCountry.cca3.cca3}>{visitedCountry.name.common}</li>
          ))}
        </ol>
      </div>
      <div className="visited-container">
        <h3>Total Visited Flags: {visitedFlags.length}</h3>
        {visitedFlags.map((visitedFlag,index) => (
          <img key={index} src={visitedFlag}></img>
        ))}
      </div>

      {/* country div */}
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
