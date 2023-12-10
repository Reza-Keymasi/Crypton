import { useQuery } from "@tanstack/react-query";
import getCoins from "../services/apiCoins";

export function useCoins(limit) {
  const { data, isLoading } = useQuery({
    queryKey: ["coins", limit],
    queryFn: () => getCoins(limit),
  });

  return { data, isLoading };
}
