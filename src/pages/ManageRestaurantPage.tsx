import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {
  const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();

  const { restaurant } = useGetMyRestaurant();

  const {updateRestaurant, isLoading : isUpdateLoading} = useUpdateMyRestaurant()

  const isEditing = !!restaurant  //* checking if the restaurant is already exist for the user (The !!(Double NOT Operator) is a shorthand way to convert a value into a boolean)

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing? updateRestaurant :createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
}
