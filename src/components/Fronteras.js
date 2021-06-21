import React, { Fragment } from "react";

const Fronteras = ({ border, countries, changeInfo }) => {
  const filtered = countries.filter((country) => country.alpha3Code === border);

  const updateInfo = (e) => {
    const selected = e.target.textContent;
    const Filter = countries.filter((country) => country.name === selected);
    changeInfo(Filter[0]);
  };
  return (
    <Fragment>
      {filtered.map((name) => (
        <div key={name.name} className="frontera" onClick={updateInfo}>
          {name.name}
        </div>
      ))}
    </Fragment>
  );
};

export default Fronteras;
