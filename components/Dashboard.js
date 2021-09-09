import useLocalStorage from 'lib/useLocalStorage';
import { useState } from 'react';
import Controls from './Controls';
import FiresideBanner from './FiresideBanner';
import PodEpControl from './PodEpControl';
import PodTitleControl from './PodTitleControl';
import Sidebar from './Sidebar';
import SidebarButton from './SidebarButton';
import SocialImage from './SocialImage';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [podEp, setPodEp] = useLocalStorage('podEp', '#');
  const [podTitle, setPodTitle] = useLocalStorage('podTitle', 'Podcast Title');
  // const [podTitleSize, setPodTitleSize] = useLocalStorage('podTitleSize', '');

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* <Nav navigation={navigation} /> */}

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        <div className="mt-2 space-y-4">
          <PodEpControl
            handleChange={(e) => {
              setPodEp(e.target.value);
            }}
            value={podEp}
          />
          <PodTitleControl
            handleChange={(e) => setPodTitle(e.target.value)}
            value={podTitle}
          />
        </div>
        {/*

          <PodTitleSize handleChange={(e) => (setPodTitleSize(e.target.value))} value={podTitleSize} />

       */}
      </Sidebar>

      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <SidebarButton handleClick={() => setSidebarOpen(true)} />
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div>
              <FiresideBanner
                podEp={podEp}
                podTitle={podTitle}
                podTitleSize="4rem"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
