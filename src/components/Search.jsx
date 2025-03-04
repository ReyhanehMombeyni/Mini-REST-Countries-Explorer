import React, { useContext, useEffect, useState } from "react";
import { client } from "../../lib/axios";
import { CountriesContext } from "../App";

const Search = () => {
  const [nameCou, setNameCou] = useState("");
  const { dispatch } = useContext(CountriesContext);
  const [isSearch, setIsSearch] = useState(false);

  const getNameCountry = async () => {
    try {
      const res = await client.get(`/name/${nameCou}`);
      //?fullText=true
      const { data } = res;
      console.log(res);
      dispatch({ type: "SEARCH_COUNTRIES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const delayForSearch = setTimeout(() => {
    if (!nameCou && isSearch) {
      dispatch({ type: "SEARCH_COUNTRIES" });
    } else {
      getNameCountry();
    }
      }, 500);
      return () => clearTimeout(delayForSearch);
  }, [nameCou]);

  const changeHandler = (e) => {
    setNameCou(e.target.value);
    setIsSearch(true);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search by name..."
        className="input input-lg w-full"
        value={nameCou}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Search;
