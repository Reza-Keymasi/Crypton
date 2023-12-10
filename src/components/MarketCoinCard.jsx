import { Box, Card, Typography, Avatar } from "@mui/material/";

import MarketButton from "./MarketButton";

export default function MarketCoinCard({ icon, name, coinId, symbol }) {
  const nameStr = String(name).slice(0, 15);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: { sm: "100px", xs: "130px" },
      }}
    >
      <Box
        display="flex"
        justifyContent={{ xs: "space-between" }}
        alignItems="center"
      >
        <Avatar
          src={icon}
          sx={{ my: 2, mx: 1, width: "68px", height: "68px" }}
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography color="#1e0be8" component="div" variant="h6">
            {nameStr}
          </Typography>
        </Box>
        <MarketButton coinId={coinId} coinName={name} symbol={symbol} />
      </Box>
    </Card>
  );
}
