import { Box, Grid, Typography } from "@mui/material";
import { useNews } from "../hooks/useNews";
import { currentDate, scrollToTop } from "../helpers/helpers";
import NewsCard from "./NewsCard";
import MoreButton from "./MoreButton";
import { useEffect, useState } from "react";
import SkeletonColor from "./SkeletonColor";

export default function News() {
  const [moreNews, setMoreNews] = useState(false);
  const { news = [], isLoadingNews } = useNews("cryptocurrency", currentDate);
  const articles = news?.articles;

  useEffect(function () {
    scrollToTop();
  }, []);

  const isNews = true;
  const items = Array.from({ length: 50 });

  if (isLoadingNews)
    return (
      <>
        <Box display="flex" justifyContent="center" alignItems="center" my={3}>
          <Typography
            variant="h3"
            color="#2c2c6c"
            fontWeight="700"
            fontSize={{ xs: "2rem", sm: "3rem" }}
            sx={{ textDecoration: "underline" }}
          >
            Cryptocurrency News
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ p: 5 }}>
          {items.map((item) => (
            <Grid item key={item} display="flex" xs={12} lg={6}>
              <SkeletonColor isNews={isNews} />
            </Grid>
          ))}
        </Grid>
      </>
    );

  let firstFiftyNews = [];
  let secondFiftyNews = [];

  for (let i = 0; i < 51; i++) {
    firstFiftyNews.push(articles[i]);
  }

  const selectedFirstFiftyNews = firstFiftyNews.filter(
    (article) => article?.source?.id !== "bbc-news"
  );
  for (let j = 52; j < 100; j++) {
    secondFiftyNews.push(articles[j]);
  }
  const selectedSecondFiftyNews = secondFiftyNews.filter(
    (article) =>
      article?.source?.name !== "Hedgehogreview.com" &&
      article?.source?.name !== "AppleInsider" &&
      article?.source?.name !== "Internet"
  );

  console.log(selectedSecondFiftyNews);

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
          Cryptocurrency News
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{
          p: 5,
        }}
      >
        {selectedFirstFiftyNews.map((article) => (
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

      {moreNews && (
        <>
          <Grid
            container
            spacing={4}
            sx={{
              p: 5,
            }}
          >
            {selectedSecondFiftyNews.map((article) => (
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
        </>
      )}
      <Box display="flex" justifyContent="center" mb={8}>
        <MoreButton
          variant="outlined"
          onClick={() => setMoreNews((prev) => !prev)}
          color="#2c2c6c"
        >
          {!moreNews ? "More News" : "Less News"}
        </MoreButton>
      </Box>
    </Box>
  );
}
