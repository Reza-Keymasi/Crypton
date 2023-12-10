import { useQuery } from "@tanstack/react-query";
import getNews from "../services/apiNews";

export function useNews(topic, currentDate) {
  const { data: news, isLoading: isLoadingNews } = useQuery({
    queryKey: ["news", topic, currentDate],
    queryFn: () => getNews(topic, currentDate),
  });

  return { news, isLoadingNews };
}
