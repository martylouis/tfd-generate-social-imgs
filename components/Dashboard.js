import {
  CalendarIcon,
  FolderIcon,
  MicrophoneIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';
import Sidebar from './Sidebar';
import SidebarButton from './SidebarButton';

const navigation = [
  { name: 'Fireside', href: '/', icon: MicrophoneIcon, current: true },
  { name: 'Banner', href: '#', icon: UsersIcon, current: false },
  { name: 'Square', href: '#', icon: FolderIcon, current: false },
  { name: 'Story', href: '#', icon: CalendarIcon, current: false },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigation={navigation}
      />

      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <SidebarButton handleClick={() => setSidebarOpen(true)} />

        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Episode Banner
              </h1>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-gray-200 border-dashed rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
        {/* /End Main */}
      </div>
    </div>
  );
}
