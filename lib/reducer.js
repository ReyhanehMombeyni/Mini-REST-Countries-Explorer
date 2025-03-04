export const initialState = {
  countries: [],
  originCountries: [],
  isError: false,
  isLoading: false,
};

export const reducer = (state, action) => {
  if (action.type === "SET_COUNTRIES") {
    return {
      ...state,
      originCountries: action.payload,
      countries: action.payload,
    };
  }
  if (action.type === "SET_ALL")
    return { ...state, countries: state.originCountries };
  if (action.type === "SEARCHING") {
    const searchTerm= action.payload.toLowerCase();
    const countriesSearch = state.originCountries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    return { ...state, countries: countriesSearch };
  }
  if (action.type === "NOT_ALL_ORIGIN") {
    const region= action.payload;
    const countryFilter = state.originCountries.filter(
      (country) => country.region === region
    );
    return { ...state, countries: countryFilter };
  }
  if (action.type === "DEEP_SEARCH") {
    const {selectValue, nameSearch}= action.payload;
    const searchTerm= nameSearch.toLowerCase();
    const countriesSelect = state.originCountries.filter(
      (country) =>
        country.region === selectValue &&
        country.name.common.toLowerCase().includes(searchTerm)
    );
    return {...state, countries: countriesSelect}
  }
};
