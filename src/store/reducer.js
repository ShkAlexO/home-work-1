import { ACTION_COUNTRY_DELETE, ACTION_COUNTRY_LOAD } from "./actions";

const INITIAL_STATE = {
  countries: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_COUNTRY_DELETE:
      return {
        ...state,
        countries: state.countries.filter(
          (item) => item.name.official !== payload
        ),
      };
    case ACTION_COUNTRY_LOAD:
      return {
        ...state,
        countries: payload,
      };
    default:
      return state;
  }
};

export default reducer;
