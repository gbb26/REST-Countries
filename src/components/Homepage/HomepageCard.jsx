/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function HomepageCard(props) {
  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types
    <Card sx={{ width: 280 }} className={props.cardTheme}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.flag}
          alt={props.name}
          sx={{ borderBottom: "1px solid #eee" }}
        />
        <CardContent>
          <Typography
            fontWeight={800}
            gutterBottom
            variant="h6"
            fontSize={18}
            component="div"
          >
            {props.name}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={14}
            component="div"
          >
            Population: <span className="params">{props.population}</span>
          </Typography>
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={14}
            component="div"
          >
            Region: <span className="params">{props.region}</span>
          </Typography>
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={14}
            component="div"
          >
            Capital: <span className="params">{props.capital}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
