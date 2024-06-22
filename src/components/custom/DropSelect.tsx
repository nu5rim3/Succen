import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

interface IDropSelect {
    className?: string;
}

export const DropSelect: React.FC<IDropSelect> = ({ className }) => {
    return (
        <Select>
            <SelectTrigger className={`w-1/3 bg-gray-100 dark:bg-gray-700 border-none rounded-none ${className}`}>
                <SelectValue placeholder="All Time" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="All">All Time</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};