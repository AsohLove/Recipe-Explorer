import { useQuery } from "@tanstack/react-query";
import { fetchMeal } from "../services/api";

export default function useMeals(query: string) {
    return useQuery({
        queryKey: ["meals", query],
        queryFn: () => fetchMeal(query),
        enabled: !! query
    });
}