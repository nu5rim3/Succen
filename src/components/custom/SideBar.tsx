'use client';

import {
    Anchor,
    FolderKanban,
    // Bell,
    // Bookmark,
    // Home,
    LayoutDashboard,
    // List,
    // Mail,
    // MoreHorizontal,
    // User,
    // Users,
} from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';
import { SidebarItems } from '@/lib/types';
import { SidebarDesktop } from './sidebar-desktop';
import { SidebarMobile } from './sidebar-mobile';
// import { SidebarButton } from './SideBar-Button';

const sidebarItems: SidebarItems = {
    links: [
        { label: 'DashBoard', href: '/dashboard', icon: LayoutDashboard },
        { label: 'Products', href: '/create-product', icon: Anchor },
        { label: 'Cases', href: '/cases', icon: FolderKanban },
        // { label: 'Messages', href: '/item/messages', icon: Mail },
        // {
        //     href: '/item/lists',
        //     icon: List,
        //     label: 'Lists',
        // },
        // {
        //     href: '/item/bookmarks',
        //     icon: Bookmark,
        //     label: 'Bookmarks',
        // },
        // {
        //     href: '/item/communities',
        //     icon: Users,
        //     label: 'Communities',
        // },
        // {
        //     href: '/item/profile',
        //     icon: User,
        //     label: 'Profile',
        // },
    ],
    extras: (
        <div className='flex flex-col gap-2'>
            {/* <SidebarButton icon={MoreHorizontal} className='w-full'>
                More
            </SidebarButton>
            <SidebarButton
                className='w-full justify-center text-white'
                variant='default'
            >
                Tweet
            </SidebarButton> */}
        </div>
    ),
};

export function Sidebar() {
    const isDesktop = useMediaQuery('(min-width: 640px)', {
        initializeWithValue: false,
    });

    if (isDesktop) {
        return <SidebarDesktop sidebarItems={sidebarItems} />;
    }

    return <SidebarMobile sidebarItems={sidebarItems} />;
}