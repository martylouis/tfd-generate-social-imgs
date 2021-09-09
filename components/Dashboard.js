import {
  CalendarIcon,
  FolderIcon,
  MicrophoneIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';
import Sidebar from './Sidebar';
import SidebarButton from './SidebarButton';
import SocialImage from './SocialImage';

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
            <div>
              <SocialImage
                name="Fireside Banner"
                podEpNum="29"
                podTitle="Lorem ipsum dolor sit amet consectetur."
                // podTitle="Apple Everything"
                podTitleSize="3rem"
                width="700"
                height="298"
                bgUrl="/thefreelancedance_bg--1400x576.png"
                pixelRatio={2}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
