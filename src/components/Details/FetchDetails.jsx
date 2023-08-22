/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";
import { useLocation } from "react-router-dom";
function FetchDetails() {
  const location = useLocation();
  const CountryCapital = location.state;
  const [flag, setFlag] = useState(false);
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const d = await fetch(
        `https://restcountries.com/v3.1/capital/${CountryCapital}?fields=name,flags,population,region,subregion,capital,currencies,languages`
      );
      const data = await d.json();
      setCountryData(data);
      setFlag(!flag);
    };
    getData();
  }, []);
  return <div>{!flag ? "" : <DetailsCard data={countryData} />}</div>;
}

export default FetchDetails;
