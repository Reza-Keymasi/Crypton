import { Box, CssBaseline, Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import Home from "./components/Home";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import Market from "./components/Market";
import Markets from "./components/Markets";
import News from "./components/News";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:coinId" element={<CoinDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/market" element={<Market />} />
        <Route path="/market/:coin/markets" element={<Markets />} />
      </Routes>
      <Box position="relative" bottom="-15vh">
        <Footer />
      </Box>
    </>
  );
}
