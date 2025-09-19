import React, { useState } from "react";
import "./Country.css";
//component function
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  //   console.log(handleVisitedCountries);

  //useState
  const [visited, setVisited] = useState(false);

  //event handler
  const handleVisitedBtn = () => {
    //1st system
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // setVisited(visited ? false : true); //2nd system
    setVisited(!visited); //3rd system
    handleVisitedCountries(country);
  };

  return (
    //toggle css
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
      <h3>Name: {country?.name?.common}</h3>
      <p>Region: {country?.region?.region}</p>
      <p>Population: {country?.population?.population}</p>
      <p>
        Area: {country?.area?.area}{" "}
        {country?.area?.area > 300000 ? "Big country" : "Small country"}
      </p>
      <div className="btn-container">
        <button onClick={handleVisitedBtn}>
          {visited ? "Visited" : "Not Visited"}
        </button>
        <button
          onClick={() => {
            handleVisitedFlag(country?.flags?.flags?.png);
          }}
        >
          Add Visited flags
        </button>
      </div>
    </div>
  );
};

export default Country;
