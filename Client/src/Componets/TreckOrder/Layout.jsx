import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TreckOrder from './TreckOrder';

function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <>
        <div className="sm:p-6 max-w-screen-xxl  mx-auto">
            <div className="flex text-[18px] bg-[#f3f3f3] rounded shadow-sm">
                {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
                <TreckOrder sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <div className="flex-[1] h-[100vh] overflow-auto w-[100%]">
                    {/* <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} /> */}
                    <div className="content-area">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Layout;
