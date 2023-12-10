import { API_KEY } from "../../info";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export default async function getCoinExchanges(id) {
  const url = `https://coinranking1.p.rapidapi.com/coin/${id}/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result?.data?.exchanges;

    return data;
  } catch (error) {
    console.error(error);
  }
}
