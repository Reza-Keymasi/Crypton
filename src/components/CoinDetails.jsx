import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Divider, Grid, Typography } from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";

import millify from "millify";

import { useCoin } from "../hooks/useCoin";
import { useCoinPriceHistory } from "../hooks/useCoinPriceHistory";
import { useNews } from "../hooks/useNews";
import { currentDate } from "../helpers/helpers";
import LineChart from "./LineChart";
import NewsCard from "./NewsCard";

import SkeletonColor from "./SkeletonColor";

export default function CoinDetails() {
  const { coin = [], isLoadingCoin } = useCoin();
  const { coinId } = useParams();

  const periods = ["3m", "3h", "24h", "7d", "30d", "1y", "3y", "5y"];
  const [timePeriod, setTimePeriod] = useState("24h");

  const links = coin?.links;

  const { data = [], isLoadingPriceHistory } = useCoinPriceHistory(
    coinId,
    timePeriod
  );

  const { news = [], isLoadingNews } = useNews(
    `${coin?.name} cryptocurrency`,
    currentDate
  );

  const articles = news?.articles;

  const isCoinDetails = true;

  if (isLoadingCoin)
    return (
      <Box p={5}>
        <SkeletonColor isCoinDetails={isCoinDetails} />;
      </Box>
    );
  if (isLoadingNews)
    return (
      <Box p={5}>
        <SkeletonColor isCoinDetails={isCoinDetails} />;
      </Box>
    );

  const coinHistory = data?.history;
  const changeCoinPrice = data?.change;

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coin?.price && millify(coin?.price)}`,
      icon: <MonetizationOnOutlinedIcon />,
    },
    { title: "Rank", value: coin?.rank, icon: <TagOutlinedIcon /> },
    {
      title: "24h Volume",
      value: `$ ${coin?.["24hVolume"] && millify(coin?.["24hVolume"])}`,
      icon: <OfflineBoltOutlinedIcon />,
    },
    {
      title: "Market Cap",
      value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`,
      icon: <MonetizationOnOutlinedIcon />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price)
      }`,
      icon: <MilitaryTechOutlinedIcon />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coin?.numberOfMarkets,
      icon: <ShowChartIcon />,
    },
    {
      title: "Number Of Exchanges",
      value: coin?.numberOfExchanges,
      icon: <CurrencyExchangeOutlinedIcon />,
    },
    {
      title: "Aprroved Supply",
      value: coin?.supply?.confirmed ? (
        <VerifiedOutlinedIcon />
      ) : (
        <DangerousOutlinedIcon />
      ),
      icon: <GppMaybeOutlinedIcon />,
    },
    {
      title: "Total Supply",
      value: `$ ${coin?.supply?.total && millify(coin?.supply?.total)}`,
      icon: <GppMaybeOutlinedIcon />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coin?.supply?.circulating && millify(coin?.supply?.circulating)
      }`,
      icon: <GppMaybeOutlinedIcon />,
    },
  ];

  let selectedNews = [];
  for (let i = 0; i < 11; i++) {
    selectedNews.push(articles[i]);
  }

  return (
    <>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          my={5}
        >
          <Typography variant="h4" fontWeight="900" color="#2c2c6c">
            {coin?.name} ({coin?.symbol}) Price
          </Typography>
          <Typography variant="subtitle2" fontSize="20px">
            {coin?.name} {""} live price in US dollars. view value statistics,
            market cap and supply.
          </Typography>
        </Box>
        <Divider />

        <Box>
          <LineChart
            coinHistory={coinHistory}
            changeCoinPrice={changeCoinPrice}
            isLoadingPriceHistory={isLoadingPriceHistory}
            coin={coin}
            periods={periods}
            timePeriod={timePeriod}
            setTimePeriod={setTimePeriod}
          />
        </Box>

        <Divider />

        <Grid
          container
          columnSpacing={{ sm: 8, xs: 4 }}
          rowSpacing={5}
          sx={{ mt: 1 }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item mr={5}>
            <Typography variant="h6" fontWeight="900" color="#7070d1" mb={2}>
              {coin?.name} Value Statistics
            </Typography>
            <Typography variant="subtitle2" mb={1}>
              An overview showing the stats of {coin?.name}
            </Typography>

            <Divider />
            {stats.map(({ icon, title, value }) => (
              <Box
                key={coinId}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  mt={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#2c6c6bb4"
                >
                  <Typography>{icon}</Typography>
                  <Typography ml={1} mb="3px">
                    {title}
                  </Typography>
                </Box>
                <Typography fontWeight="900" mt="10px">
                  {value}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid item sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight="900" color="#7070d1" mb={2}>
              Other Statistics
            </Typography>
            <Typography variant="subtitle2" mb={1}>
              An overview showing the stats of all cryptocurrencies
            </Typography>
            <Divider />
            {genericStats.map(({ icon, title, value }) => (
              <Box
                key={coinId}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  mt={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#2c6c6bb4"
                >
                  <Typography>{icon}</Typography>
                  <Typography ml={1} mb="3px">
                    {title}
                  </Typography>
                </Box>
                <Typography fontWeight="900" mt="10px">
                  {value}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Grid container mt={5} sx={{ justifyContent: "space-around" }}>
        <Grid item xs={12} md={6} mb={{ xs: 4, sm: "none" }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="left"
            color="#4848c0"
            pl={4}
          >
            <Typography component="span" color="#2c2c" pr={1}>
              <VerifiedOutlinedIcon />
            </Typography>
            {coin?.description}
          </Typography>
        </Grid>
        <Grid xs={8} md={4} px={{ xs: 4, md: 0 }}>
          <Typography
            variant="h6"
            fontWeight="900"
            color="#7070d1"
            textAlign="center"
            mb={2}
          >
            {coin?.name} Links
          </Typography>
          <Divider />
          {links?.map((link) => (
            <Box
              key={coinId}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" fontWeight="700" mb={3}>
                {link.type}
              </Typography>
              <Typography
                variant="h6"
                fontWeight="900"
                component={Link}
                mb={3}
                to={`${link.url}`}
                sx={{ textDecoration: "none", color: "#4848c0" }}
              >
                {link.name}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>

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
        {coin?.name} Top 10 News
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          p: 5,
          mb: 15,
        }}
      >
        {selectedNews.map((article) => (
          <Grid
            item
            key={article?.source?.id}
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
    </>
  );
}
