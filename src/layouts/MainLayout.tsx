
import { Sidebar } from '@/components/custom/SideBar';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/themeProvider';
import { Bell, Search } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    const { isMinimized } = useTheme()
    return (
        <div>
            <Sidebar />
            <main className={`mt-16 ${isMinimized ? 'sm:ml-[100px]' : 'sm:ml-[250px]'} sm:mt-0`}>
                <div className='hidden sm:flex px-5 h-14 justify-end items-center gap-2'>
                    <Button variant={'default'} className='rounded-3xl p-3'><Search size={18} /></Button>
                    <Button variant={'default'} className='rounded-3xl p-3'><Bell size={18} /></Button>
                </div>
                <div className='p-5 sm:px-16'>
                    <Outlet />
                </div>
            </main>
        </div>

    )
}

export default MainLayout