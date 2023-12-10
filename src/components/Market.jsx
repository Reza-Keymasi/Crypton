import { Box, Grid, Typography } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import { useCoins } from "../hooks/useCoins";
import SkeletonColor from "./SkeletonColor";
import MarketCoinCard from "./MarketCoinCard";
import { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import { scrollToTop } from "../helpers/helpers";

export default function Market() {
  const [coinsLimit, setCoinsLimit] = useState(50);
  const { data, isLoading } = useCoins(coinsLimit);
  const isMarket = true;

  useEffect(function () {
    scrollToTop();
  }, []);

  const coins = data?.coins;

  const items = Array.from({ length: coinsLimit });

  if (isLoading)
    return (
      <Grid container spacing={4} sx={{ p: 2 }}>
        {items.map((item) => (
          <Grid item key={item} display="flex" xs={6} sm={6} md={4} lg={3}>
            <SkeletonColor isMarket={isMarket} />
          </Grid>
        ))}
      </Grid>
    );

  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center" my={3}>
        <Typography
          variant="h3"
          color="#2c2c6c"
          fontWeight="700"
          fontSize={{ xs: "2rem", sm: "3rem" }}
          sx={{ textDecoration: "underline" }}
        >
          Choose Your Coin{" "}
          <VerifiedOutlinedIcon sx={{ width: "40px", height: "40px" }} />
        </Typography>
      </Box>

      <Grid container spacing={2} p={2}>
        {coins.map((coin) => (
          <Grid item key={coin.uuid} xs={12} sm={6} lg={4} xl={3}>
            <MarketCoinCard
              icon={coin?.iconUrl}
              name={coin?.name}
              coinId={coin?.uuid}
              symbol={coin?.symbol}
            />
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" my={2}>
        {coinsLimit === 50 ? (
          <MoreButton
            variant="outlined"
            color="#2c2c6c"
            onClick={() => setCoinsLimit(100)}
          >
            More Coins
          </MoreButton>
        ) : (
          <MoreButton
            variant="outlined"
            color="red"
            onClick={() => setCoinsLimit(50)}
          >
            Less Coins
          </MoreButton>
        )}
      </Box>
    </Box>
  );
}
