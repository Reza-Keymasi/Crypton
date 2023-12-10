import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Box, Divider, Typography, Input, Grid, Avatar } from "@mui/material";

import { useMarkets } from "../hooks/useMarkets";
import { useCoinLivePrice } from "../hooks/useCoinLivePrice";
import { useReferenceCurrencies } from "../hooks/useReferenceCurrency";
import numberWithSpaces from "../helpers/helpers";
import MarketsTable from "./MarketsTable";

import SelectFilter from "./SelectFilter";
import SkeletonColor from "./SkeletonColor";
import millify from "millify";

export default function Markets() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { coin } = useParams();
  const [coinName, coinId, symbol] = coin
    ? coin.split("&")
    : [null, null, null];
  const [equalCoinName, name] = coinName ? coinName.split("=") : [null, null];
  const [equalCoinId, CoinID] = coinId ? coinId.split("=") : [null, null];
  const [equalCoinsymbol, coinSymbol] = symbol
    ? symbol.split("=")
    : [null, null];

  const { referenceCurrencies = [], isLoading } = useReferenceCurrencies();
  const [currency, setCurrency] = useState("USD");
  const selectedCurrency = referenceCurrencies.filter(
    (referenceCurrency) => referenceCurrency.symbol === currency
  );
  const currencyId = selectedCurrency[0]?.uuid;

  const selectedCurrencySign = selectedCurrency[0]?.sign
    ? selectedCurrency[0]?.sign
    : selectedCurrency[0]?.symbol;

  // For Pagination and rows per page
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  function handleChangeReferenceCurrency(e) {
    setCurrency(e.target.value);
    searchParams.set("referenceCurrency", e.target.value);
    setSearchParams(searchParams);
  }

  useEffect(
    function () {
      const urlReferenceCurrency = searchParams.get("referenceCurrency");
      setCurrency(urlReferenceCurrency);
    },

    [setCurrency, searchParams]
  );

  const [searchInput, setSearchInput] = useState("");

  const { markets = [], isLoadigMarkets } = useMarkets(
    CoinID,
    currencyId,
    rowsPerPage,
    page
    // searchInput
  );
  const searchedData = markets.filter((market) => {
    return (
      (market && market?.base?.symbol?.toLowerCase().includes(searchInput)) ||
      market?.quote?.symbol?.toLowerCase().includes(searchInput)
    );
  });

  const rowsPerPageOptions = [10, 25, 50, 100];

  const { price } = useCoinLivePrice(CoinID, currencyId);

  function handleChangeSearch(e) {
    setSearchInput(e.target.value);
  }

  const items = Array.from({ length: 84 });

  const isMarketsTable = true;

  if (isLoadigMarkets)
    return (
      <Grid container spacing={4} p={2}>
        {items.map((item) => (
          <Grid item key={item} xs={6} sm={4} md={3} lg={2}>
            {" "}
            <SkeletonColor isMarketsTable={isMarketsTable} />
          </Grid>
        ))}
      </Grid>
    );

  // const livePrice =
  //   price &&
  //   (numberWithSpaces(price) > "1"
  //     ? numberWithSpaces(price).slice(0, 8)
  //     : price.slice(0, 7));
  const livePrice =
    price &&
    millify(price, {
      precision: 5,
    });

  return (
    <>
      <Box gap={2} my={5}>
        <Box display="flex" justifyContent="flex-end" mr={2}>
          <SelectFilter
            CoinID={CoinID}
            setCurrency={setCurrency}
            isLoading={isLoading}
            markets={markets}
            currency={currency}
            referenceCurrencies={referenceCurrencies}
            handleChangeReferenceCurrency={handleChangeReferenceCurrency}
          />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" mt={16}>
          <Box display="flex">
            <Typography variant="h4" fontWeight="900" color="#2c2c6c">
              {name}{" "}
            </Typography>
            <Typography variant="subtitle2" fontSize="10px">
              {coinSymbol}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1.5}>
            <Typography variant="h5" color="#2c2c6c" fontWeight="600" ml={5}>
              {selectedCurrencySign} {livePrice}{" "}
            </Typography>
            <Typography
              sx={{ border: "1px solid #2c2c6c", borderRadius: "10px" }}
              px="3px"
              fontSize="12px"
              ml={2}
            >
              Live
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="h4"
            fontWeight="600"
            color="#2c2c6c"
            sx={{ textDecoration: "underline" }}
            my={5}
          >
            Markets
          </Typography>
          <Input
            placeholder="Search Market"
            sx={{ width: "400px", color: "#6b6bc1", mb: 5 }}
            type="input"
            value={searchInput}
            onChange={handleChangeSearch}
          />
        </Box>
      </Box>
      <Box>
        <MarketsTable
          markets={markets}
          isLoading={isLoading}
          coinSymbol={coinSymbol}
          selectedCurrencySign={selectedCurrencySign}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          searchedData={searchedData}
        />
      </Box>
    </>
  );
}
