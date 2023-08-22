import "./App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import FetchCountries from "./components/Homepage/FetchCountries";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchDetails from "./components/Details/FetchDetails";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <BrowserRouter>
      <div className={theme} style={{ minHeight: "100vh", width: "100%" }}>
        <nav className="navbar">
          <Typography variant="h6" fontWeight={800} paddingLeft={5}>
            Where?
          </Typography>
          <Button
            color="inherit"
            sx={{ marginRight: 5 }}
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            Dark Mode
          </Button>
        </nav>
        <Routes>
          <Route exact path="/" element={<FetchCountries theme={theme} />} />
          <Route
            exact
            path="/countryInfo"
            element={<FetchDetails theme={theme} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
