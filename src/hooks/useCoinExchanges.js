import { useQuery } from "@tanstack/react-query";

import getCoinExchanges from "../services/apiCoinExchanges";

export function useCoinExchanges(coinId) {
  const {
    data: exchanges,
    isLoadingExchanges,
    error,
  } = useQuery({
    queryKey: ["exchanges", coinId],
    queryFn: () => getCoinExchanges(coinId),
  });

  return { exchanges, isLoadingExchanges, error };
}
