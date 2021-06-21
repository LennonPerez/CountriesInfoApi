import React, { Fragment } from "react";
import Country from "./Country";
import Searchbar from "./Searchbar";
import RegionFilter from "./RegionFilter";

const Main = ({ countries, setCountries, setChange, setCountry, filter }) => {
  return (
    <Fragment>
      <div className="filtradores">
        <Searchbar filter={filter} setCountries={setCountries} />
        <RegionFilter setCountries={setCountries} filter={filter} />
      </div>
      <div className="contenedor-paises">
        {countries.map((country) => (
          <Country
            key={country.numericCode}
            country={country}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            setChange={setChange}
            setCountry={setCountry}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Main;
