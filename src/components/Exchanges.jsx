import { useSearchParams } from "react-router-dom";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { useCoinExchanges } from "../hooks/useCoinExchanges";
import millify from "millify";

import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GppBadOutlinedIcon from "@mui/icons-material/GppBadOutlined";

export default function Exchanges({ coinId: modalCoinId }) {
  const { exchanges = [], isLoadingExchanges } = useCoinExchanges(modalCoinId);

  const [searchParams] = useSearchParams();

  if (isLoadingExchanges) return <p>Loading</p>;
  const coinName = searchParams.get("coinName");

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "#2c2c6c",
          textDecoration: "underline #2c2c",
        }}
      >
        {coinName} Exchanges
      </Typography>
      <Box>
        {exchanges.map((exchange) => (
          <>
            <Box
              key={exchange?.uuid}
              m={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Avatar
                src={exchange?.iconUrl}
                sx={{ m: 1, width: "68px", height: "68px" }}
              />
              <Typography varint="h6" fontWeight="900" color="#1e0be8" mx={1}>
                {" "}
                {exchange?.name}
              </Typography>
              <Typography
                fontWeight="700"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Recommended:{" "}
                {exchange?.recommended ? (
                  <VerifiedUserOutlinedIcon
                    sx={{
                      color: "#22cc22",
                      ml: 1,
                      height: "22.5px",
                      width: "22.5px",
                    }}
                  />
                ) : (
                  <GppBadOutlinedIcon
                    sx={{
                      color: "#cc5b22",
                      ml: 1,
                      height: "22.5px",
                      width: "22.5px",
                    }}
                  />
                )}
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={{ xs: 2 }}
              alignItems={{ xs: "center" }}
              justifyContent="center"
            >
              <Box>
                <Typography
                  color="#4910cd"
                  sx={{ display: "flex" }}
                  ml={1}
                  mb={2}
                >
                  24h Trade Volume:{" "}
                  <Typography fontWeight="700" color="#8f8fbe" ml="5px">
                    {millify(exchange["24hVolume"])}
                  </Typography>
                </Typography>

                <Typography color="#4910cd" sx={{ display: "flex" }} ml={1}>
                  Price:{" "}
                  <Typography fontWeight="700" color="#8f8fbe" ml="5px">
                    {millify(exchange?.price)} $
                  </Typography>
                </Typography>
              </Box>

              <Box ml={{ xs: 9, sm: 2 }}>
                <Typography
                  color="#4910cd"
                  sx={{ display: "flex" }}
                  ml={{ sm: 1 }}
                  mb={2}
                >
                  Price Based On BTC:{" "}
                  <Typography fontWeight="700" color="#8f8fbe" ml="5px">
                    {Number(exchange.btcPrice).toFixed(4)} BTC
                  </Typography>
                </Typography>

                <Typography
                  color="#4910cd"
                  sx={{ display: "flex" }}
                  ml={{ sm: 1 }}
                >
                  Number Of Markets:{" "}
                  <Typography fontWeight="700" color="#8f8fbe" ml="5px">
                    {exchange.numberOfMarkets}
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Divider variant="middle" />
          </>
        ))}
      </Box>
    </Box>
  );
}
