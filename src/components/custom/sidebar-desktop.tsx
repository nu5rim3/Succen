import { Separator } from '../ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { LogIn, LogOut, MoreHorizontal, Settings } from 'lucide-react';
import { SidebarItems } from '@/lib/types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SidebarButton } from './SideBar-Button';
import logo from '../../assets/react.svg';

interface SidebarDesktopProps {
    sidebarItems: SidebarItems;
}

export function SidebarDesktop(props: SidebarDesktopProps) {
    const navigate = useNavigate()
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <aside className='w-[250px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r'>
            <div className='h-full px-3 py-4'>
                <div className='px-2 py-2'>
                    <img src={logo} />
                </div>
                <div className='mt-5'>
                    <div className='flex flex-col gap-1 w-full'>
                        {props.sidebarItems.links.map((link, index) => (
                            <Link key={index} to={link.href}>
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
                    <div className='absolute left-0 bottom-3 w-full px-3'>
                        <Separator className='absolute -top-3 left-0 w-full' />
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant='ghost' className='w-full justify-start'>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='flex gap-2'>
                                            <Avatar className='h-5 w-5'>
                                                <AvatarImage src='https://github.com/max-programming.png' />
                                                <AvatarFallback>Joanathon</AvatarFallback>
                                            </Avatar>
                                            <span>Joanathon</span>
                                        </div>
                                        <MoreHorizontal size={20} />
                                    </div>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className='mb-2 w-56 p-3 rounded-[1rem]'>
                                <div className='space-y-1'>
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
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </aside>
    );
}