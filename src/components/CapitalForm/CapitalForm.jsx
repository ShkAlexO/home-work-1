import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.sass";
import { getCountries } from "../../services/countriesService";
import { actionCountryLoad } from "../../store/actions";

export default function CapitalForm() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const countries = useSelector((store) => store.countries);
  const [translations, setTranslations] = useState(
    countries.length ? Object.keys(countries?.[0]?.translations) : []
  );
  const [translation, setTranslation] = useState(translations?.[0] ?? "");
  const [country, setCountry] = useState(countries[0] ? countries[0] : {});

  useEffect(() => {
    setCountry(countries[0]);
    const translations = Object.keys(countries?.[0]?.translations ?? {});
    if (translations.length) {
      setTranslations(translations);
      setTranslation(translations[0]);
    }
  }, [countries]);

  const handleSelectCapital = (e) => {
    const currentCountry = countries.find(
      (country) => country.name.official === e.target.value
    );
    setCountry(currentCountry);
    let countryTranslations = countries.find(
      (country) => country.name.official === e.target.value
    ).translations;

    setTranslations(Object.keys(countryTranslations));
    setTranslation(Object.keys(countryTranslations)[0]);
  };

  const handleSelectTranslation = (e) => setTranslation(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(
      `/countries/${country.name.official}?translation=${translation}`
    );
  };

  console.log(countries);

  return countries.length ? (
    <div className="component">
      <h3>Capital Form Component</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Select Capital</h4>
          <select defaultValue={country} onChange={handleSelectCapital}>
            {countries.map((country, index) => (
              <option key={index} value={country.name.official}>
                {country?.capital?.[0]}
              </option>
            ))}
          </select>
        </label>
        <label>
          <h4>Select Translation</h4>
          <select defaultValue={translation} onChange={handleSelectTranslation}>
            {translations.map((key, index) => (
              <option key={index} value={key}>
                {key}
              </option>
            ))}
          </select>
        </label>
        <button>Read more about {country?.name?.official}</button>
      </form>
    </div>
  ) : null;
}
