import { SearchState } from "@/pages/SearchPage";
import { Restaurant, RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetRestaurant = (restaurantId?: string) => {  // id is optional because the first time this hook loads we might not have the restaurantId on the first render since we are getting that from the usePrams hook
  const getRestaurantByIdRequest = async (): Promise<Restaurant> => {
    const response = await fetch(`${API_BASE_URL}/api/restaurant/${restaurantId}`)

    if(!response){
      throw new Error("Failed to get restaurant")
    }

    return response.json()
  }

  const {data: restaurant, isLoading} = useQuery("fetchRestaurant", getRestaurantByIdRequest, {enabled: !!restaurantId}) //* telling useQuery to only call function if there is restaurantId

  return {restaurant, isLoading}
}

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {

  const params = new URLSearchParams()
  params.set("searchQuery", searchState.searchQuery)
  params.set("page", searchState.page.toString())
  params.set("selectedCuisines", searchState.selectedCuisines.join(","))
  params.set("sortOption", searchState.sortOption)

  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchState],   //* when ever the searchState changes then the fuction will be called again
    createSearchRequest,
    { enabled: !!city }
  );

  return {
    results,
    isLoading,
  };
};
