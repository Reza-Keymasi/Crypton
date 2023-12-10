import { Box, Button } from "@mui/material";
import { useState } from "react";
import Exchanges from "./Exchanges";
import BasicModal from "./Modal";
import getCoinExchanges from "../services/apiCoinExchanges";
import { useSearchParams } from "react-router-dom";

export default function ExchangeButton({ coinId, coinName }) {
  const [showModal, setIsOpenModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpenModal = () => {
    setIsOpenModal(true);
    // put a query string in the url
    searchParams.set("coinName", coinName);
    setSearchParams(searchParams);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        size="small"
        sx={{ width: "132.82px" }}
        onClick={handleOpenModal}
      >
        Exchanges
      </Button>
      <BasicModal open={showModal} setIsOpenModal={setIsOpenModal}>
        <Exchanges coinId={coinId} />
      </BasicModal>
    </Box>
  );
}
