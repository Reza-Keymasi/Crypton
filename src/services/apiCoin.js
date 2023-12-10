import { API_KEY } from "../../info";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export default async function getCoin(id) {
  const url = `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result?.data?.coin;
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
