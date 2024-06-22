import { LucideIcon } from 'lucide-react';
import { Button, ButtonProps } from '../ui/button';
import { cn } from '@/lib/utils';
import { SheetClose } from '../ui/sheet';

interface SidebarButtonProps extends ButtonProps {
    icon?: LucideIcon;
    isShowLable?: boolean;
}

export function SidebarButton({
    icon: Icon,
    className,
    children,
    isShowLable,
    ...props
}: SidebarButtonProps) {
    return (
        <Button
            variant='ghost'
            className={cn('gap-2 justify-start', className)}
            {...props}
        >
            {Icon && <Icon size={isShowLable ? 20 : 20} />}
            {isShowLable && <span>{children}</span>}
        </Button>
    );
}

export function SidebarButtonSheet(props: SidebarButtonProps) {
    return (
        <SheetClose asChild>
            <SidebarButton {...props} />
        </SheetClose>
    );
}