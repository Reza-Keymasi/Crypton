import { Box, Grid, Button } from "@mui/material";

import { useCoins } from "../hooks/useCoins";
import CoinCard from "./CoinCard";
import SkeletonColor from "./SkeletonColor";
import { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import { scrollToTop } from "../helpers/helpers";

export default function Coins() {
  const [coinsLimit, setCoinsLimit] = useState(50);
  const { data, isLoading } = useCoins(coinsLimit);
  const coins = data?.coins;

  useEffect(function () {
    scrollToTop();
  }, []);

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const isCoins = true;

  if (isLoading)
    return (
      <Grid container spacing={4} sx={{ p: 2 }}>
        {items.map((item) => (
          <Grid item key={item} display="flex" xs={6} sm={6} md={4} lg={3}>
            <SkeletonColor isCoins={isCoins} />
          </Grid>
        ))}
      </Grid>
    );

  return (
    <>
      <Grid container spacing={4} sx={{ p: 2 }}>
        {coins.map((coin) => (
          <Grid
            item
            key={coin.uuid}
            display="flex"
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
          >
            <CoinCard
              symbol={coin.symbol}
              name={coin.name}
              icon={coin.iconUrl}
              price={coin.price}
              change={coin.change}
              marketCap={coin.marketCap}
              id={coin.uuid}
            />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center">
        {coinsLimit === 50 ? (
          <Button variant="outlined" onClick={() => setCoinsLimit(100)}>
            More Coins
          </Button>
        ) : (
          <MoreButton
            variant="outlined"
            color="error"
            onClick={() => setCoinsLimit(50)}
          >
            Less Coins
          </MoreButton>
        )}
      </Box>
    </>
  );
}
