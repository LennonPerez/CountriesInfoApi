import React from "react";

const Searchbar = ({ setCountries, filter }) => {
  const handleChange = (e) => {
    const search = filter.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCountries(search);
  };
  return (
    <div className="contenedor-input">
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
      />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default Searchbar;
