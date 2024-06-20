
import { Sidebar } from '@/components/custom/SideBar';
import { Button } from '@/components/ui/button';
import { Bell, Search } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Sidebar />
            <main className='mt-16 sm:ml-[250px] sm:mt-0'>
                <div className='hidden sm:flex px-5 h-14 justify-end items-center gap-2'>
                    <Button variant={'ghost'} className='rounded-full bg-white'><Search size={18} /></Button>
                    <Button variant={'ghost'} className='rounded-full bg-white'><Bell size={18} /></Button>
                </div>
                <div className='p-5 sm:p-16'>
                    <Outlet />
                </div>
            </main>
        </div>

    )
}

export default MainLayout