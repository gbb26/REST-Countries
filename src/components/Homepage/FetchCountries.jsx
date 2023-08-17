/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import HomepageCard from "./HomepageCard";
import { useEffect, useState } from "react";
// region population name flag capital
function FetchCountries(props) {
  const findCountry = (event) => {
    event.preventDefault();
    if (inputCountry.length > 0) {
      getData(
        `https://restcountries.com/v3.1/name/${inputCountry}?fields=name,flags,population,region,capital`
      );
    } else {
      getData(
        "https://restcountries.com/v3.1/independent?status=true&fields=name,flags,population,region,capital"
      );
    }
  };
  const [inputCountry, setInputCountry] = useState("India");
  const [countriesData, setCountriesData] = useState([]);

  const getData = async (apiUrl) => {
    const d = await fetch(apiUrl);
    const data = await d.json();
    setCountriesData(data);
    console.log(data);
  };
  useEffect(() => {
    getData(
      "https://restcountries.com/v3.1/independent?status=true&fields=name,flags,population,region,capital"
    );
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "20px",
          marginTop: "18px",
          height: "80px",
        }}
        className="forms"
      >
        <form onSubmit={findCountry} id="container-input">
          <input
            value={inputCountry}
            onChange={(event) => {
              setInputCountry(event.target.value);
            }}
            type="text"
            placeholder="Search for a country"
            id="input"
            className={
              // eslint-disable-next-line react/prop-types
              props.theme === "light" ? "light-mode-text-input" : "card-dark"
            }
          />
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"></path>
          </svg>
        </form>
        <form>
          <select
            name="Filter by Region"
            value="Filter By Regions"
            id="regions"
            onChange={(e) => {
              getData(
                `https://restcountries.com/v3.1/region/${e.target.value}?&fields=capital,name,region,population,flags`
              );
            }}
            // eslint-disable-next-line react/prop-types
            className={props.theme === "light" ? "" : "card-dark"}
          >
            <option className="" id="">
              Filter by Regions
            </option>
            <option className="" id="">
              Africa
            </option>
            <option className="" id="">
              America
            </option>
            <option className="" id="">
              Asia
            </option>
            <option className="" id="">
              Europe
            </option>
            <option className="" id="">
              Oceania
            </option>
          </select>
        </form>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "50px",
          paddingBottom: "30px",
          listStyleType: "none",
        }}
      >
        {countriesData.map((items, index) => {
          return (
            <li key={index}>
              <HomepageCard
                cardTheme={props.theme === "light" ? "card-light" : "card-dark"}
                flag={items.flags.png ? items.flags.png : ""}
                name={items.name.common ? items.name.common : ""}
                capital={items.capital ? items.capital[0] : ""}
                region={items.region ? items.region : ""}
                population={items.population}
              />
            </li>
          );
        })}
      </Box>
    </>
  );
}

export default FetchCountries;
