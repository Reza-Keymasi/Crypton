import { NEWS_API_KEY } from "../../info";

export default async function getNews(topic, currentDate) {
  const url = `https://newsapi.org/v2/everything?q=${topic}&apifrom=${currentDate}&sortBy=popularity&apiKey=${NEWS_API_KEY}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    const data = result;
    return data;
  } catch (error) {
    console.error(error);
  }
}
