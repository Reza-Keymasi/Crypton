import { useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  Paper,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GppBadOutlinedIcon from "@mui/icons-material/GppBadOutlined";
import millify from "millify";

export default function MarketsTable({
  markets = [],
  isLoading,
  coinSymbol,
  selectedCurrencySign,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  rowsPerPageOptions,
  searchedData,
}) {
  if (isLoading) return <p>Loading</p>;

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const columns = [
    { id: "markets", label: "Markets", minWidth: 170 },
    {
      id: `${coinSymbol} price`,
      label: `${coinSymbol} Price`,
      minWidth: 100,
    },

    {
      id: "volume_24h",
      label: "24h Trade Volume",
      minWidth: 170,
      align: "center",
    },
    {
      id: "recommended",
      label: "Recommended",
      minWidth: 170,
      align: "center",
    },
  ];

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <Typography fontWeight="700">{column.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {searchedData
              ? searchedData.map((market) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={market.uuid}
                    >
                      {columns.map((column) => {
                        const value = market[column.id];

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "markets" && (
                              <Box display="flex" alignItems="center">
                                <Avatar src={market?.exchange?.iconUrl} />

                                <Typography fontWeight="700" ml={2}>
                                  {market.base.symbol} / {market.quote.symbol}
                                </Typography>
                              </Box>
                            )}
                            {column.id === `${coinSymbol} price` && (
                              <Typography>
                                {selectedCurrencySign} {""}
                                {Number(market.price).toFixed(2)}
                              </Typography>
                            )}

                            {column.id === "volume_24h" && (
                              <Typography>
                                {selectedCurrencySign} {""}
                                {millify(market["24hVolume"], { space: true })}
                              </Typography>
                            )}
                            {column.id === "recommended" && (
                              <Typography>
                                {market.recommended ? (
                                  <VerifiedUserOutlinedIcon
                                    sx={{
                                      color: "#22cc22",
                                      ml: 1,
                                      height: "22.5px",
                                      width: "22.5px",
                                    }}
                                  />
                                ) : (
                                  <GppBadOutlinedIcon
                                    sx={{
                                      color: "#cc5b22",
                                      ml: 1,
                                      height: "22.5px",
                                      width: "22.5px",
                                    }}
                                  />
                                )}
                              </Typography>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              : markets.map((market) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={market.uuid}
                    >
                      {columns.map((column) => {
                        const value = market[column.id];

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "markets" && (
                              <Box display="flex" alignItems="center">
                                <Avatar src={market?.exchange?.iconUrl} />

                                <Typography fontWeight="700" ml={2}>
                                  {market.base.symbol} / {market.quote.symbol}
                                </Typography>
                              </Box>
                            )}
                            {column.id === `${coinSymbol} price` && (
                              <Typography>
                                {selectedCurrencySign} {""}
                                {Number(market.price).toFixed(2)}
                              </Typography>
                            )}

                            {column.id === "volume_24h" && (
                              <Typography>
                                {selectedCurrencySign} {""}
                                {millify(market["24hVolume"], { space: true })}
                              </Typography>
                            )}
                            {column.id === "recommended" && (
                              <Typography>
                                {market.recommended ? (
                                  <VerifiedUserOutlinedIcon
                                    sx={{
                                      color: "#22cc22",
                                      ml: 1,
                                      height: "22.5px",
                                      width: "22.5px",
                                    }}
                                  />
                                ) : (
                                  <GppBadOutlinedIcon
                                    sx={{
                                      color: "#cc5b22",
                                      ml: 1,
                                      height: "22.5px",
                                      width: "22.5px",
                                    }}
                                  />
                                )}
                              </Typography>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={100}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
