import {
  Box,
  InputLabel,
  Typography,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { Line, Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function LineChart({
  coinHistory,
  changeCoinPrice,
  isLoadingPriceHistory,
  coin,
  periods,
  timePeriod,
  setTimePeriod,
}) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(
  //   function () {
  //     const initialTimePeriod = searchParams.get("timePeriod");
  //     if (initialTimePeriod === null) {
  //       setTimePeriod(timePeriod);
  //       searchParams.set("timePeriod", timePeriod);
  //       setSearchParams(searchParams);
  //     } else {
  //       setTimePeriod(initialTimePeriod);
  //     }
  //   },
  //   [timePeriod, setTimePeriod, searchParams, setSearchParams]
  // );

  useEffect(
    function () {
      const urlTimePeriod = searchParams.get("timePeriod");
      setTimePeriod(urlTimePeriod);
    },
    [setTimePeriod, searchParams]
  );

  if (isLoadingPriceHistory) return <p>Loading...</p>;
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.length; i += 1) {
    coinPrice.push(Number(coinHistory[i]?.price));
  }
  for (let i = 0; i < coinHistory?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory[i]?.timestamp).toLocaleDateString()
    );
  }
  //   console.log(coinTimestamp);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      y: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const handleChangeTimePeriod = (event) => {
    setTimePeriod(event.target.value);
    searchParams.set("timePeriod", event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Box sx={{ mx: 10, my: 4 }}>
      <Box width="100%" my={2}>
        <FormControl fullWidth sx={{ width: "200px" }}>
          <InputLabel id="demo-simple-select-label">Time Period</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timePeriod}
            label="Time Period"
            onChange={handleChangeTimePeriod}
          >
            {periods.map((period) => (
              <MenuItem key={period} value={period}>
                {period}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>{" "}
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" color="#2c2c6c">
          {coin?.name} Price Chart
        </Typography>
        <Typography fontWeight="800">Change: {changeCoinPrice} %</Typography>
      </Box>
      <Box>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
}
