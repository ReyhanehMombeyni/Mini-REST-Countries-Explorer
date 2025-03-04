import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../App";

const FilterBox = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [selectValue, setSelectValue] = useState("allorigin");

  const { dispatch } = useContext(CountriesContext);

  const optionHandler = () => {
    if (selectValue === "allorigin" && !nameSearch) {
        dispatch({ type: "SET_ALL" });
    }
    else if(selectValue === "allorigin" && nameSearch) {
        dispatch({ type: "SEARCHING", payload: nameSearch });
    }
    else if (selectValue !== "allorigin" && !nameSearch) {
        dispatch({type: "NOT_ALL_ORIGIN", payload: selectValue})
    }
    else if (selectValue !== "allorigin" && nameSearch) {
        dispatch({type: "DEEP_SEARCH", payload: {selectValue, nameSearch}})
    }
  };

  const changeHandler = async () => {
    if (selectValue === "allorigin" && !nameSearch) {
        dispatch({ type: "SET_ALL" });
    }
    else if(selectValue === "allorigin" && nameSearch) {
        dispatch({ type: "SEARCHING", payload: nameSearch });
    }
    else if (selectValue !== "allorigin" && !nameSearch) {
        dispatch({type: "NOT_ALL_ORIGIN", payload: selectValue})
    }
    else if (selectValue !== "allorigin" && nameSearch) {
        dispatch({type: "DEEP_SEARCH", payload: {selectValue, nameSearch}})
    }
  };

  useEffect(()=>{
    changeHandler();
    optionHandler();
  },[selectValue, nameSearch])
  
  return (
    <div className="py-5 flex gap-10">
      <div className="w-full">
        <input
          type="text"
          placeholder="Search by name..."
          className="input input-lg w-full"
          value={nameSearch}
          onChange={e=>setNameSearch(e.target.value)}
        />
      </div>
      <div className="w-full">
        <select
          className="select select-lg w-full"
          value={selectValue}
          onChange={e=>setSelectValue(e.target.value)}
        >
          <option value="allorigin">All Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBox;
