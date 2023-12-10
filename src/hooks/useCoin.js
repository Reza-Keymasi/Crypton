import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getCoin from "../services/apiCoin";

export function useCoin() {
  const { coinId } = useParams();
  const {
    data: coin,
    isLoadingCoin,
    error,
  } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => getCoin(coinId),
  });

  return { coin, isLoadingCoin, error, coinId };
}
