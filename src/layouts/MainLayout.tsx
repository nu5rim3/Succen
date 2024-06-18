
import { Sidebar } from '@/components/SideBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Sidebar />
            <main className='mt-16 sm:ml-[250px] sm:mt-0'>
                <div className='px-5 bg-gray-100 h-14 flex justify-end items-center'> Search</div>
                <div className='p-5'>
                    <Outlet />
                </div>
            </main>
        </div>

    )
}

export default MainLayout