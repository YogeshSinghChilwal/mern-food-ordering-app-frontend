import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CusineCheckbox = ({ cuisine, field }: Props) => {
  return (
    <FormItem  className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field.value.includes(cuisine)} //* field.value = ["pasta", "pizza"]  cuisine = "pizza" if the user clicks on 'pizza' it will be pushed in field.value array, then this statement will return true and the box will be checked
          onCheckedChange={(checked) => {   //* checked is a boolean
            if (checked) {
              field.onChange([...field.value, cuisine]);    //* add the checked cuisine to the list that the user has already selected
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== cuisine)    //* we are removing the checked cuisine if the checked is false 
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>
    </FormItem>
  );
};

export default CusineCheckbox;
