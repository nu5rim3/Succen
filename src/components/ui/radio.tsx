import React from "react";
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from "@/lib/utils.ts";

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <RadioGroupPrimitive.Root
        ref={ref}
        className={cn("flex items-center gap-2 ", className)}
        {...props}
    >
        {children}
    </RadioGroupPrimitive.Root>
));

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName


const RadioItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
    <div className="flex items-center gap-2 w-max h-10 px-3 py-2 text-sm rounded-3xl bg-white dark:bg-primary/10">
        <RadioGroupPrimitive.Item
            className={cn("h-4 w-4 border border-[#D0D5DD] rounded-3xl data-[state=checked]:border-[#3535D1] data-[state=checked]:bg-[#eeeeff] ", className)}
            {...props}
            ref={ref}
        >
            <RadioGroupPrimitive.Indicator className="RadioGroupIndicator flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#3535D1" strokeWidth="1.6666" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <label className="Label" htmlFor="r1">
            {children}
        </label>
    </div>
))


export { RadioGroup, RadioItem }