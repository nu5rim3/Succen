import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <aside>
                {/* Sidebar content */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/auth/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/messages">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>

    )
}

export default MainLayout