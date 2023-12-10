import { useCoins } from "../hooks/useCoins";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useNews } from "../hooks/useNews";
import Header from "./Header";
import CoinCard from "./CoinCard";
import SkeletonColor from "./SkeletonColor";
import NewsCard from "./NewsCard";
import MoreButton from "./MoreButton";
import { currentDate, scrollToTop } from "../helpers/helpers";
import { useEffect } from "react";

const Home = () => {
  const { data, isLoading } = useCoins(50);
  const navigate = useNavigate();

  const { news = [], isLoadingNews } = useNews("cryptocurrency", currentDate);

  useEffect(function () {
    scrollToTop();
  }, []);

  const items = Array.from({ length: 12 });
  const isHome = true;

  if (isLoading)
    return (
      <>
        <Grid container spacing={4} sx={{ p: 5 }}>
          {items.map((item) => (
            <Grid item key={item} display="flex" xs={6} sm={6} md={4} lg={3}>
              <SkeletonColor isHome={isHome} />
            </Grid>
          ))}
        </Grid>
      </>
    );

  if (isLoadingNews)
    return (
      <Grid container spacing={4} sx={{ p: 5 }}>
        {items.map((item) => (
          <Grid item key={item} display="flex" xs={6} sm={6} md={4} lg={3}>
            <SkeletonColor isHome={isHome} />
          </Grid>
        ))}
      </Grid>
    );

  const articles = news?.articles;

  let topNews = [];
  for (let i = 0; i < 11; i++) {
    topNews.push(articles[i]);
  }
  const selectedNews = topNews.filter(
    (article) => article.source.id !== "bbc-news"
  );

  const coins = data?.coins;
  const stats = data?.stats;

  const rankedCoins = coins.filter((coin) => coin.rank < 11);

  return (
    <>
      <Box>
        <Header rankedCoins={rankedCoins} stats={stats} />
        <Box>
          <Typography
            variant="h3"
            fontWeight="700"
            sx={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "underline",
              color: "#2c2c6c",
              mt: 5,
            }}
          >
            Top 10 Coins
          </Typography>

          <Grid container spacing={4} sx={{ p: 5 }}>
            {rankedCoins.map((coin) => (
              <Grid
                item
                key={coin.uuid}
                display="flex"
                xs={12}
                sm={6}
                md={4}
                lg={3}
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              my: 1,
              mr: 6,
            }}
          >
            <MoreButton
              onClick={() => navigate("/coins")}
              variant="outlined"
              color="#2c2c6c"
            >
              More Coins
            </MoreButton>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h3"
            fontWeight="700"
            sx={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "underline",
              color: "#2c2c6c",
              mt: 5,
            }}
          >
            Top 10 News
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{
              p: 5,
            }}
          >
            {selectedNews.map((article) => (
              <Grid
                item
                key={article.source.id}
                xs={12}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <NewsCard article={article} />
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="center" my={3}>
            <MoreButton variant="outlined" color="#2c2c6c">
              <Link to={`/news`}>More News</Link>
            </MoreButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
