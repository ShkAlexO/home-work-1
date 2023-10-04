import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCountryDelete } from "./../../store/actions";

export default function CountriesList() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries);
  const handleItemDelete = (name) => dispatch(actionCountryDelete(name));

  return (
    <div className="component">
      <h3>Countries List</h3>
      {countries.length ? (
        <ul>
          {countries.map((country, index) => (
            <li key={index}>
              <Link to={country.name.official}>
                <img
                  src={country.flags.svg}
                  alt={country.name.official}
                  width="24px"
                />{" "}
                <span> {country.name.official}</span>
              </Link>{" "}
              <button onClick={() => handleItemDelete(country.name.official)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
