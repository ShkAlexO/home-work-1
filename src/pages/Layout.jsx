import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.sass";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./../components/Navigation/Navigation";

import RouteHome from "../routes/RouteHome.jsx";
import RouteCountries from "./../routes/RouteCountries";
import RouteCountry from "./../routes/RouteCountry";
import { getCountries } from "../services/countriesService";
import { actionCountryLoad } from "../store/actions";

export default function Layout() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries);

  useEffect(() => {
    if (!countries.length) {
      (async () => {
        const fullCountriesList = await getCountries();
        const countriesList = fullCountriesList.slice(0, 10);
        dispatch(actionCountryLoad(countriesList));
      })();
    }
  }, []);

  console.log(countries);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route index path="/" element={<RouteHome />}></Route>
            <Route path="countries" element={<RouteCountries />}></Route>
            <Route path="countries/:country" element={<RouteCountry />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
