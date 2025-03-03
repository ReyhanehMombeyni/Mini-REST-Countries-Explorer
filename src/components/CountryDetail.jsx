import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { CountriesContext } from "../App";

const CountryDetail = () => {
  const { common } = useParams();
  const { countries } = useContext(CountriesContext);
  const country = countries.find((countr) => countr.name.common === common);

  return (
    country && (
      <div className="flex px-10 py-5 justify-between">
        <div className="text-md font-bold text-gray-600">
          <h1 className="pb-5 text-2xl font-bold text-black">{common}</h1>
          <p>
            Official Name: <span className="font-medium">{country.name.official}</span>
          </p>
          <p>
            Capital: <span className="font-medium">{country.capital}</span>
          </p>
          <p>
            Region: <span className="font-medium">{country.region}</span>
          </p>
          <p>
            Subregion: <span className="font-medium">{country.flag}</span>
          </p>
          <p>
            Population: <span className="font-medium">{country.population}</span>
          </p>
        </div>
        <div className="pr-20">
          <img src={country.flags.svg} alt={common} className="w-80" />
        </div>
      </div>
    )
  );
};

export default CountryDetail;
