import { useQuery } from "@tanstack/react-query";
import getCoinLivePrice from "../services/apiCoinLivePrice";

export function useCoinLivePrice(coinId, referenceCurrencyId) {
  const { data: price, isLoading: isLoadingPrice } = useQuery({
    queryKey: ["price", coinId, referenceCurrencyId],
    queryFn: () => getCoinLivePrice(coinId, referenceCurrencyId),
  });

  return { price, isLoadingPrice };
}
