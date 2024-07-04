import React, { useEffect, useState } from "react";
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
    value?: string;
    placeHolder?: string;
    onChange?: (e: string) => void,
    itemList?: { name: string; value: string; }[]
}

export const DropSelect: React.FC<IDropSelect> = ({ className, onChange, itemList, placeHolder = "All Time", value }) => {
    const [selection, setSelection] = useState(value);

    useEffect(() => {
        setSelection(value)
    }, [value]);

    const handleValueChange = (value: string) => {
        setSelection(value);
        onChange && onChange(value)
    };

    return (
        <Select value={selection} onValueChange={handleValueChange}>
            <SelectTrigger className={`w-1/3 bg-gray-100 dark:bg-primary/10 border-none rounded-3xl ${className}`}>
                <SelectValue placeholder={placeHolder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {itemList?.map(it => (
                        <SelectItem key={it.name} value={it.value}>{it.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};