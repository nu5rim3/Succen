import { Separator } from '../ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ChevronLeft, LogIn, LogOut, Moon, MoreHorizontal, Settings, Sun } from 'lucide-react';
import { SidebarItems } from '@/lib/types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SidebarButton } from './SideBar-Button';
import logo from '../../assets/react.svg';
import logo2 from '../../assets/react2.svg';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/themeProvider';

interface SidebarDesktopProps {
    sidebarItems: SidebarItems;
}

export function SidebarDesktop(props: SidebarDesktopProps) {
    const navigate = useNavigate()
    const location = useLocation();
    const pathname = location.pathname;
    const { theme, toggleTheme, isMinimized, setIsMinimized } = useTheme()

    return (
        <aside className={`${isMinimized ? 'w-[75px]' : 'w-[250px]'} max-w-xs h-screen fixed left-0 top-0 z-40 border-r border-gray-700/20`}>
            <ChevronLeft
                className={cn(
                    'absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
                    isMinimized && 'rotate-180'
                )}
                onClick={setIsMinimized}
            />
            <div className='h-full px-3 py-4'>
                <div className='px-2 py-2'>
                    {isMinimized && <img src={logo2} className='w-8' />}
                    {!isMinimized && <img src={logo} />}
                </div>
                <div className='mt-5'>
                    <div className='flex flex-col gap-1 w-full'>
                        {props.sidebarItems.links.map((link, index) => (
                            <Link key={index} to={link.href}>
                                <SidebarButton
                                    variant={pathname === link.href ? 'secondary' : 'ghost'}
                                    icon={link.icon}
                                    className={`w-full rounded-md hover:bg-green-600/10 ${pathname === link.href && 'bg-green-600/10'}`}
                                    isShowLable={!isMinimized}
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
                                            {!isMinimized && <span>Joanathon</span>}
                                        </div>
                                        <MoreHorizontal size={20} />
                                    </div>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className='mb-2 w-56 p-3 rounded-[1rem] border-gray-700/20'>
                                <div className='space-y-1'>
                                    <Link to='/'>
                                        <SidebarButton size='sm' icon={Settings} className='w-full' isShowLable={true}>
                                            Account Settings
                                        </SidebarButton>
                                    </Link>
                                    <SidebarButton size='sm' icon={theme === 'dark' ? Sun : Moon} className='w-full' onClick={toggleTheme} isShowLable={true}>
                                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                                    </SidebarButton>
                                    <SidebarButton size='sm' icon={LogOut} className='w-full' isShowLable={true}>
                                        Log Out
                                    </SidebarButton>
                                    <SidebarButton size='sm' icon={LogIn} className='w-full' onClick={() => navigate('/auth/login')} isShowLable={true}>
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