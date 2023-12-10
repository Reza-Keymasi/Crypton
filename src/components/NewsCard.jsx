import * as React from "react";
import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  CardOverflow,
  Typography,
} from "@mui/joy";
import { Link } from "react-router-dom";

export default function NewsCard({ article }) {
  return (
    <Card
      size="sm"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: "center",

        width: { xs: 800, lg: 500 },
        height: { xs: 610, lg: 550 },
        // to make the demo resizable
        // resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardOverflow
        variant="solid"
        color="primary"
        sx={{
          flex: "0 0 150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: "var(--Card-padding)",
        }}
      >
        <Typography fontSize="28px" fontWeight="300" textColor="#fff">
          Authors:
          <br />
          {article?.author}
        </Typography>
        {/* <Typography textColor="primary.200"></Typography> */}
      </CardOverflow>
      <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
        <AspectRatio objectFit="contain" variant="plain">
          <img alt="" src={article?.urlToImage} />
        </AspectRatio>
        <CardContent sx={{ pr: 1 }}>
          <Typography textAlign="justify" my={1} level="title-lg">
            {article?.title}
          </Typography>
          <Typography fontSize="sm" textAlign="justify" sx={{ mt: 0.5 }}>
            {article?.description}
          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            "--variant-borderWidth": "2px",
            borderRadius: 40,
            borderColor: "primary.500",
            mx: "auto",
          }}
        >
          <Link
            to={article?.url}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Read More...
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
