import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type Props = {
    onChange: (value: string) => void;
    sortOption: string;
}

const SORT_OPTIONS = [
    {
        label: "Best match",
        value: "bestMatch"
    },
    {
        label: "Delivery price",
        value: "deliveryPrice"
    },
    {
        label: "Estimated delivery time",
        value: "estimatedDeliveryTime"
    }
]

const SortOptionDropdown = ({onChange, sortOption}: Props) => {

    const selectedSortLabel = SORT_OPTIONS.find((option) => option.value === sortOption)?.label || SORT_OPTIONS[0].label


  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
            <Button className="w-full" variant="outline">
                Sort by: {selectedSortLabel}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            {SORT_OPTIONS.map((option) => (
                <DropdownMenuItem key={option.value} className="cursor-pointer" onClick={() => onChange(option.value)}>
                    {option.label}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SortOptionDropdown
