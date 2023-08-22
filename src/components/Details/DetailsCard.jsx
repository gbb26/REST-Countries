/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

function DetailsCard(props) {
  const langs = Object.values(props.data[0].languages);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        padding: "30px",
      }}
    >
      <div id="detailsCard">
        <img
          src={props.data[0].flags.png}
          alt={props.data[0].name.common}
          id="country-flag"
        />
        <div id="country-details">
          <Typography variant="h4" sx={{ fontWeight: 800 }} id="">
            {props.data[0].name.common ? props.data[0].name.common : ""}
          </Typography>
          <span id="country-data">
            <span>
              <Typography sx={{ fontWeight: 600 }} variant="h6">
                Native name:
                <span className="params">
                  {" "}
                  {props.data[0].name.official
                    ? props.data[0].name.official
                    : ""}
                </span>
              </Typography>
              <Typography sx={{ fontWeight: 600 }} variant="h6">
                Population:
                <span className="params">
                  {" "}
                  {props.data[0].population ? props.data[0].population : ""}
                </span>
              </Typography>
              <Typography sx={{ fontWeight: 600 }} variant="h6">
                Region:{" "}
                <span className="params">
                  {" "}
                  {props.data[0].region ? props.data[0].region : ""}
                </span>
              </Typography>
              <Typography sx={{ fontWeight: 600 }} variant="h6">
                Sub Region:{" "}
                <span className="params">
                  {props.data[0].subregion ? props.data[0].subregion : ""}
                </span>
              </Typography>
              <Typography sx={{ fontWeight: 600 }} variant="h6">
                Capital:{" "}
                <span className="params">
                  {props.data[0].capital ? props.data[0].capital : ""}
                </span>
              </Typography>
            </span>
            <span>
              <Typography sx={{ fontWeight: 600 }} variant="h6">
                Currencies:{" "}
                <span className="params" style={{ fontWeight: 300 }}>
                  {Object.values(props.data[0].currencies)[0].name
                    ? Object.values(props.data[0].currencies)[0].name
                    : ""}
                </span>
              </Typography>
              <Typography sx={{ fontWeight: 600 }} variant="h6">
                Languages:{" "}
                <span className="params" style={{ fontWeight: 300 }}>
                  {langs.join(", ")}
                </span>
              </Typography>
            </span>
          </span>
        </div>
      </div>
    </Box>
  );
}

export default DetailsCard;
