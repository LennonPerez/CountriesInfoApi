import React, { useState, useEffect } from "react";

const RegionFilter = ({ setCountries, filter }) => {
  const [text, changeText] = useState("Filter by Region");
  const [result, setResult] = useState([]);

  const hiddenmenu = document.querySelector(".menu-oculto");
  const arrow = document.querySelector(".fa-angle-down");

  const showMenu = () => {
    if (hiddenmenu.style.display === "flex") {
      hiddenmenu.style.display = "none";
      arrow.style.bottom = "80%";
      arrow.style.transform = "none";
    } else {
      hiddenmenu.style.display = "flex";
      arrow.style.bottom = "810%";
      arrow.style.transform = "rotate(-180deg)";
    }
  };

  useEffect(() => {
    setCountries(result);
  }, [result, setCountries]);

  const selectRegion = (e) => {
    changeText(e.target.textContent);
    switch (e.target.textContent) {
      case "Africa":
        setResult(
          filter.filter((country) => e.target.textContent === country.region)
        );
        break;
      case "Americas":
        setResult(
          filter.filter((country) => e.target.textContent === country.region)
        );
        break;
      case "Asia":
        setResult(
          filter.filter((country) => e.target.textContent === country.region)
        );
        break;
      case "Europe":
        setResult(
          filter.filter((country) => e.target.textContent === country.region)
        );
        break;
      case "Oceania":
        setResult(
          filter.filter((country) => e.target.textContent === country.region)
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className="contenedor-filtro">
      <ul onClick={showMenu}>
        <li>
          {text}
          <ul className="menu-oculto">
            <li onClick={selectRegion}>Africa</li>
            <li onClick={selectRegion}>Americas</li>
            <li onClick={selectRegion}>Asia</li>
            <li onClick={selectRegion}>Europe</li>
            <li onClick={selectRegion}>Oceania</li>
          </ul>
        </li>
        <i className="fas fa-angle-down flecha"></i>
      </ul>
    </div>
  );
};

export default RegionFilter;
