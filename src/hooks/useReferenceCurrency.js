import { useQuery } from "@tanstack/react-query";
import getRefferenceCurrency from "../services/apiReferenceCurrency";

export function useReferenceCurrencies() {
  const { data: referenceCurrencies, isLoading } = useQuery({
    queryKey: ["refferncecurrency"],
    queryFn: () => getRefferenceCurrency(),
  });

  return { referenceCurrencies, isLoading };
}
