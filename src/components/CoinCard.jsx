import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Button,
} from "@mui/material/";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import millify from "millify";
import { Link } from "react-router-dom";
import ExchangeButton from "./ExchangeButton";

export default function CoinCard({
  symbol,
  name,
  icon,
  price,
  change,
  marketCap,
  id: coinId,
}) {
  const roundedPrice = price > 1 ? millify(price) : Number(price).toFixed(5);

  const changPriceColor = change > 0 ? "#0c960ca9" : "#cc4d22";
  const changePriceIcon =
    change > 0 ? (
      <KeyboardDoubleArrowUpIcon />
    ) : (
      <KeyboardDoubleArrowDownIcon />
    );

  const nameStr = String(name).slice(0, 18);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: { sm: "300px", xs: "330px" },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Avatar src={icon} sx={{ m: 1, width: "68px", height: "68px" }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            color="#1e0be8"
            component="div"
            variant="h6"
            sx={{ pr: 2 }}
          >
            {nameStr}
          </Typography>
          <Typography variant="subtitle1" color="#1d0be879" component="div">
            {symbol}
          </Typography>
        </Box>
      </Box>
      <Divider />

      <Box>
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Box display="flex" flexDirection="column">
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontSize: "16px" }}
            >
              Price:{" "}
              <Typography color="#1d0be856" variant="subtitle" component="span">
                {roundedPrice} $
              </Typography>
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ display: "flex", fontSize: "16px" }}
            >
              Market Cap:
              <Typography
                color="#1d0be856"
                sx={{ fontSize: "16px", pl: "3px" }}
              >
                {" "}
                {millify(marketCap)} $
              </Typography>
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ display: "flex", fontSize: "16px" }}
            >
              Change:
              <Typography
                variant="subtitle"
                component="span"
                sx={{
                  color: changPriceColor,
                  display: "flex",
                  justifyContent: "center",
                  pl: "3px",
                }}
              >
                {change}%{changePriceIcon}
              </Typography>
            </Typography>
          </Box>
        </CardContent>
        <Box
          ml={{ xs: 0, sm: 2 }}
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", sm: "flex-start" }}
          gap={1}
        >
          <Link to={`/coins/${coinId}?timePeriod=24h`}>
            <Button
              color="success"
              variant="contained"
              size="small"
              // onClick={() => navigate(`/coins/${coinId}`)}
            >
              More Details
            </Button>
          </Link>
          <ExchangeButton coinId={coinId} coinName={name} />
        </Box>
      </Box>
    </Card>
  );
}
