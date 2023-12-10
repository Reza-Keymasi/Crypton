import { API_KEY } from "../../info";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export default async function getCoinPriceHistory(id, period) {
  const url = `https://coinranking1.p.rapidapi.com/coin/${id}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${period}`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result?.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
