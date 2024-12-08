import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Layout = () => {
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleAside = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className="flex flex-row h-screen">
            <main className="flex-1 ">
                <Outlet />
            </main>
            <aside className={`h-full transition-all ${isMinimized ? 'w-20' : 'w-2/12'} bg-color-third sticky top-0`}>
                <button
                    className={`text-color-primary rounded hover:bg-primary flex justify-center items-center text-3xl z-50 absolute transition-all top-6 right-6`}
                    onClick={toggleAside}
                >
                    {isMinimized ? <FiChevronLeft /> : <FiChevronRight />}
                </button>

                <Dashboard isMinimized={isMinimized} />
            </aside>
        </div>
    );
};

export default Layout;
