import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function SelectFilter({
  currency,
  setCurrency,
  isLoading,
  referenceCurrencies,
  handleChangeReferenceCurrency,
}) {
  if (isLoading) return <p>Loading</p>;

  return (
    <Box sx={{ minWidth: 120 }}>
      <Box display="flex">
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Change Currency
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Change Currency"
              onChange={handleChangeReferenceCurrency}
              sx={{ width: "200px" }}
            >
              {referenceCurrencies.map((currency) => (
                <MenuItem key={currency.uuid} value={currency?.symbol}>
                  {currency?.symbol}-{currency?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
