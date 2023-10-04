import axios from "axios";

const API = `https://restcountries.com/v3.1/`;

const getCountries = () => axios(API + `all`).then(({ data }) => data);

const getCountryItem = (path) =>
  axios(API + `name/${path}`).then(({ data }) => data);

export { getCountries, getCountryItem };
