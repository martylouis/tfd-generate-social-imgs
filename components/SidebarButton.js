import { MenuIcon } from '@heroicons/react/outline';

export default function SidebarButton({ handleClick }) {
  return (
    <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
      <button
        type="button"
        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={handleClick}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="w-6 h-6" aria-hidden="true" />
      </button>
    </div>
  );
}
