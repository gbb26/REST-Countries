
import "./App.css";
import { useState } from "react";
import FetchCountries from "./components/Homepage/FetchCountries";
import { Button, Typography } from "@mui/material";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={theme} style={{ minHeight: "100vh", width: "100%" }}>
      <nav className="navbar">
        <Typography variant="h6" fontWeight={800} paddingLeft={5}>
          Where in the world?
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
      <FetchCountries theme={theme} />
    </div>
  );
}

export default App;
