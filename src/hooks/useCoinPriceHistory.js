import { useQuery } from "@tanstack/react-query";
import getCoinPriceHistory from "../services/apiPriceHistory";

export function useCoinPriceHistory(coinId, timePeriod) {
  const { data, isLoading: isLoadingPriceHistory } = useQuery({
    queryKey: ["history", coinId, timePeriod],
    queryFn: () => getCoinPriceHistory(coinId, timePeriod),
  });

  return { data, isLoading: isLoadingPriceHistory };
}
