import { Box, Stack, Typography } from "@mui/material";
import millify from "millify";

import Background from "../assets/back3.jpg";
import numberWithSpaces from "../helpers/helpers";

export default function Header({ stats }) {
  const {
    total24hVolume,
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
  } = stats;
  const totalCoinsWithVirgol = numberWithSpaces(stats?.totalCoins);
  return (
    <Box
      sx={{
        // backgroundColor: "#539fa06f",
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "70vh",
      }}
    >
      <Box
        sx={{
          backdropFilter: "blur(5px)",
          height: "70vh",
        }}
      >
        <Typography
          component="div"
          variant="h3"
          fontWeight="700"
          sx={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
            color: "#22cc22",
          }}
        >
          Global Crypto Stats
        </Typography>

        <Box display="flex" justifyContent="center" my={5}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" color="#22cc22">
                Total Cryptocurrencies
              </Typography>
              <Typography color="#00ff0089">{totalCoinsWithVirgol}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="#22cc22">
                Total Market Cap
              </Typography>
              <Typography color="#00ff0089">
                {millify(totalMarketCap)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="#22cc22">
                Total Markets
              </Typography>
              <Typography color="#00ff0089">{millify(totalMarkets)}</Typography>
            </Box>
          </Stack>
          <Stack spacing={2} ml={6}>
            <Box>
              <Typography variant="h6" color="#22cc22">
                Total Exchanges
              </Typography>
              <Typography color="#00ff0089">
                {millify(totalExchanges)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="#22cc22">
                Total 24h Volume
              </Typography>
              <Typography color="#00ff0089">
                {millify(total24hVolume)}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
