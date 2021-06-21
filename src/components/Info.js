import React, { Fragment } from "react";
import Fronteras from "./Fronteras";

const Info = ({ setChange, info, countries, changeInfo }) => {
  return (
    <Fragment>
      <div className="back">
        <button type="button" onClick={() => setChange(false)}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
      </div>
      <div className="infocompleta">
        <div className="img">
          <img src={info.flag} alt={"bandera"} />
        </div>
        <div>
          <h2>{info.name}</h2>
          <div className="columnas">
            <div className="column-1">
              <p>
                Native name: <span>{info.nativeName}</span>
              </p>
              <p>
                Population: <span>{info.population}</span>
              </p>
              <p>
                Region: <span>{info.region}</span>
              </p>
              <p>
                Subregion: <span>{info.subregion}</span>
              </p>
              <p>
                Capital: <span>{info.capital}</span>
              </p>
            </div>
            <div className="column-2">
              <p className="separacion">
                Top level domain: <span>{info.topLevelDomain[0]}</span>
              </p>
              <p>
                Currensies:{" "}
                <span>
                  {info.currencies.map((currency) => `${currency.code}. `)}
                </span>
              </p>
              <p>
                Languages:
                <span>
                  {info.languages.map((language) => ` ${language.name}. `)}
                </span>
              </p>
            </div>
          </div>
          <h3>Border countries:</h3>
          <div className="fronteras">
            {info.borders.map((border) => (
              <Fronteras
                key={border}
                border={border}
                countries={countries}
                changeInfo={changeInfo}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
