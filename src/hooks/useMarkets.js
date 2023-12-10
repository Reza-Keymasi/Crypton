import { useQuery } from "@tanstack/react-query";
import getMarkets from "../services/apiMarket";

export function useMarkets(coinId, referenceCurrencyId, limit, newPage) {
  const { data: markets, isLoading: isLoadigMarkets } = useQuery({
    queryKey: ["markets", coinId, referenceCurrencyId, limit, newPage],
    queryFn: () => getMarkets(coinId, referenceCurrencyId, limit, newPage),
  });

  return { markets, isLoadigMarkets };
}
