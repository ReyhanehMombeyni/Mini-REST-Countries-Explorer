export const initialState= {
    countries: [],
    originCountries: [],
    isError: false,
    isLoading: false,
}

export const reducer= (state, action)=> {
    if(action.type=== "SET_COUNTRIES") {
        console.log("set_countries",state.originCountries);
        return {...state, originCountries: action.payload, countries: action.payload}
    }
    if(action.type=== "SEARCH_COUNTRIES")
        if(action.payload)
            return {...state, countries: action.payload}
        else 
        return {...state, countries: state.originCountries}
}