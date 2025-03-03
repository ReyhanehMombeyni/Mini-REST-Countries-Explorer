import { useContext } from "react";
import CountryItem from "../components/CountryItem";
import { CountriesContext } from "../App";

const Countries = () => {

  const {countries}= useContext(CountriesContext)

  return (
    <div className="border-t-1 border-gray-300 border-solid px-10 py-5">
      <h1 className="text-2xl font-bold">Countries</h1>
      <div className="py-5 flex gap-5">for Search</div>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {countries ? (
          countries.map((country) => (
            <CountryItem key={country.cca3} country={country} />
          ))
        ) : (
          <p>No countries match your filters.</p>
        )}
      </div>
      
    </div>
  );
};

export default Countries;
