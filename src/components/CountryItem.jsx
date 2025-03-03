import React from "react";
import { NavLink } from "react-router";

const CountryItem = ({country}) => {
  const { cca3, name, region, population }=country
  const {common}= name;
  return (
    <div className="card w-96 bg-base-100 card-lg shadow-lg hover:shadow-2xl">
      <div className="card-body text-gray-700">
        <h2 className="card-title text-blue-700 font-bold text-xl">
          <NavLink to={`/countries/${common}`}>{common}</NavLink>
        </h2>
        <p>
         Region: {region}
        </p>
        <p>
          Population: {population}
        </p>
      </div>
    </div>
  );
};

export default CountryItem;
