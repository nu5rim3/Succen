import React, {useState} from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

interface IYearPickerProps {
    onChange?: (val: string) => void;
    className?: string
}

const YearPicker: React.FC<IYearPickerProps> = ({onChange, className}) => {
    const [years, setYears] = useState(generateYears(20));
    const [selectedYear, setSelectedYear] = useState("all");

    const handleValueChange = (value: string) => {
        setSelectedYear(value);
        onChange && onChange(value)
    };

    const loadMoreYears = () => {
        const lastYear = years[years.length - 1];
        const newYears = generateYears(10, lastYear - 1);
        setYears([...years, ...newYears]);
    };

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const {scrollTop, scrollHeight, clientHeight} = event.target as HTMLElement;
        if (scrollTop + clientHeight >= scrollHeight) {
            loadMoreYears();
        }
    };

    return (

        <Select value={selectedYear} onValueChange={handleValueChange}>
            <SelectTrigger className={`w-1/3 bg-gray-100 dark:bg-gray-700 border-none rounded-none ${className}`}>
                <SelectValue placeholder="All Time"/>
            </SelectTrigger>
            <SelectContent onScroll={handleScroll}>
                <SelectGroup>
                    <SelectItem value={"all"}>
                        All Time
                    </SelectItem>
                    {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                            {year}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

const generateYears = (count: number, startYear = new Date().getFullYear()) => {
    return Array.from({length: count}, (_, i) => startYear - i);
};

export default YearPicker;
