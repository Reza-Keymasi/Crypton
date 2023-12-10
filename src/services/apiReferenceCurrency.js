import { API_KEY } from "../../info";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export default async function getReferenceCurrencies() {
  const url =
    "https://coinranking1.p.rapidapi.com/reference-currencies?types%5B0%5D=fiat&limit=50&offset=0";
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result?.data?.currencies;

    return data;
  } catch (error) {
    console.error(error);
  }
}
