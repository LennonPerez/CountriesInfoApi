import React from "react";

const Country = ({
  flag,
  name,
  population,
  region,
  capital,
  country,
  setChange,
  setCountry,
}) => {
  const getInfo = () => {
    const Country = country;
    setCountry(Country);
    setChange(true);
  };
  return (
    <div className="contenedor elemento" onClick={getInfo}>
      <div style={{ backgroundImage: `url(${flag})` }}></div>
      <div className="contenedor-info">
        <h3>{name}</h3>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
