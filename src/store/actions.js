// action types
const ACTION_COUNTRY_DELETE = `ACTION_COUNTRY_DELETE`;
const ACTION_COUNTRY_LOAD = `ACTION_COUNTRY_LOAD`;

// actions
const actionCountryDelete = (payload) => ({
  type: ACTION_COUNTRY_DELETE,
  payload,
});

const actionCountryLoad = (payload) => ({
  type: ACTION_COUNTRY_LOAD,
  payload,
});

export {
  ACTION_COUNTRY_DELETE,
  ACTION_COUNTRY_LOAD,
  actionCountryDelete,
  actionCountryLoad,
};
