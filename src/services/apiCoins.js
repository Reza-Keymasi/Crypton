import { API_KEY } from "../../info";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export default async function getCoins(limit) {
  const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${limit}&offset=0`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result?.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
