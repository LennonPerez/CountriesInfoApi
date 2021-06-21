import "./styles/app.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Info from "./components/Info";
import { ThemeProvider } from "styled-components";
import { light, dark, GlobalStyles } from "./components/Themes";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [change, setChange] = useState(false);
  const [info, changeInfo] = useState({});
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState([]);

  const requestApi = async () => {
    const url = `https://restcountries.eu/rest/v2/all`;
    const request = await fetch(url);
    const result = await request.json();
    setCountries(result);
    setFilter(result);
  };

  useEffect(() => {
    requestApi();
  }, [change]);

  const setCountry = (country) => {
    changeInfo(country);
  };

  const changeStyles = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      theme === "light" ? setTheme("dark") : setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? dark : light}>
      <GlobalStyles />
      <div className="contenedor-principal">
        <Header changeStyles={changeStyles} />
        {change ? (
          <Info
            setChange={setChange}
            info={info}
            countries={countries}
            changeInfo={changeInfo}
          />
        ) : (
          <Main
            countries={countries}
            setCountries={setCountries}
            setChange={setChange}
            setCountry={setCountry}
            filter={filter}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
