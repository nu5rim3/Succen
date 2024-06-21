import {
    Sheet,
    // SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { LogIn, LogOut, Menu, MoreHorizontal, Settings } from 'lucide-react';
import { SidebarButtonSheet as SidebarButton } from './SideBar-Button';
import { Separator } from '../ui/separator';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { SidebarItems } from '@/lib/types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/react.svg';

interface SidebarMobileProps {
    sidebarItems: SidebarItems;
}

export function SidebarMobile(props: SidebarMobileProps) {
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' variant='ghost' className='fixed top-3 left-3'>
                    <Menu size={20} />
                </Button>
            </SheetTrigger>
            {/* hideClose */}
            <SheetContent side='left' className='px-3 py-4' >
                <SheetHeader className='flex flex-row justify-between items-center space-y-0'>
                    <div className='px-2 py-2'>
                        <img src={logo} />
                    </div>
                    {/* <SheetClose asChild>
                        <Button className='h-7 w-7 p-0' variant='ghost'>
                            <X size={15} />
                        </Button>
                    </SheetClose> */}
                </SheetHeader>
                <div className='h-full'>
                    <div className='mt-5 flex flex-col w-full gap-1'>
                        {props.sidebarItems.links.map((link, idx) => (
                            <Link key={idx} to={link.href}>
                                <SidebarButton
                                    variant={pathname === link.href ? 'secondary' : 'ghost'}
                                    icon={link.icon}
                                    className='w-full'
                                >
                                    {link.label}
                                </SidebarButton>
                            </Link>
                        ))}
                        {props.sidebarItems.extras}
                    </div>
                    <div className='absolute w-full bottom-4 px-1 left-0'>
                        <Separator className='absolute -top-3 left-0 w-full' />
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant='ghost' className='w-full justify-start'>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='flex gap-2'>
                                            <Avatar className='h-5 w-5'>
                                                <AvatarImage src='https://github.com/max-programming.png' />
                                                <AvatarFallback>Max Programming</AvatarFallback>
                                            </Avatar>
                                            <span>Max Programming</span>
                                        </div>
                                        <MoreHorizontal size={20} />
                                    </div>
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent className='mb-2 p-2'>
                                <div className='flex flex-col space-y-2 mt-2'>
                                    <Link to='/'>
                                        <SidebarButton size='sm' icon={Settings} className='w-full'>
                                            Account Settings
                                        </SidebarButton>
                                    </Link>
                                    <SidebarButton size='sm' icon={LogOut} className='w-full'>
                                        Log Out
                                    </SidebarButton>
                                    <SidebarButton size='sm' icon={LogIn} className='w-full' onClick={() => navigate('/auth/login')}>
                                        Log In
                                    </SidebarButton>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}