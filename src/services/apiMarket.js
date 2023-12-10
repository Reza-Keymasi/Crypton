import { API_KEY } from "../../info";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};
export default async function getMarkets(
  id,
  referenceCurrencyId,
  limit,
  newPage
  // search
) {
  const url = `https://coinranking1.p.rapidapi.com/coin/${id}/markets?referenceCurrencyUuid=${referenceCurrencyId}&limit=${limit}&offset=${newPage}&orderBy=24hVolume&orderDirection=desc`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result?.data?.markets;
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// &search=${search}
