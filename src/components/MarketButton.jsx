import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function MarketButton({ coinId, coinName, symbol }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // function handleClick() {
  //   searchParams.set("coinName", coinName), setSearchParams(searchParams);
  //   navigate(`/market/${coinName} ${coinId}/markets`);
  // }

  // useEffect(function () {
  //   const removeQueryParam = searchParams.get("coinName");
  //   if (removeQueryParam) {
  //     searchParams.delete("coinName");
  //     setSearchParams();
  //   }
  // });

  function handleClick() {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("coinName", coinName);
    newSearchParams.set("coinId", coinId);
    newSearchParams.set("symbol", symbol);
    navigate(
      `/market/${newSearchParams.toString()}/markets?referenceCurrency=USD`
    );
  }
  useEffect(() => {
    const removeCoinName = searchParams.get("coinName");
    const removeCoinId = searchParams.get("coinId");
    const removeSymbol = searchParams.get("symbol");

    if (removeCoinName) {
      searchParams.delete("coinName");
      setSearchParams(searchParams);
    }

    if (removeCoinId) {
      searchParams.delete("coinId");
      setSearchParams(searchParams);
    }
    if (removeSymbol) {
      searchParams.delete("symbol");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, symbol]);

  return (
    <Box mr={2}>
      <Button
        variant="contained"
        size="small"
        sx={{ width: "100px" }}
        onClick={handleClick}
      >
        Markets
      </Button>
    </Box>
  );
}
