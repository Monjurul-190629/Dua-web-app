'use client';

import { useState } from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import { MenuIcon, XIcon } from 'lucide-react';

const ResponsiveLayout = ({ children }) => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full relative">
      {/* Toggle Buttons */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button onClick={() => setLeftOpen(!leftOpen)}>
          {leftOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button onClick={() => setRightOpen(!rightOpen)}>
          {rightOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Left Sidebar */}
      <div className={`fixed top-0 left-0 z-40 h-full bg-white w-[250px] shadow-lg transition-transform duration-300 md:relative md:translate-x-0 lg:w-[100px] ${leftOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <LeftSideBar />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 overflow-y-auto w-full">{children}</main>

      {/* Right Sidebar */}
      <div className={`fixed top-0 right-0 z-40 h-full bg-white w-[250px] shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-[200px] ${rightOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <RightSideBar />
      </div>
    </div>
  );
};

export default ResponsiveLayout;
