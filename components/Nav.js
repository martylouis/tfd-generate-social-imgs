import {
  CalendarIcon,
  FolderIcon,
  MicrophoneIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { classnames } from 'tailwindcss-classnames';

const navigation = [
  { name: 'Fireside', href: '/', icon: MicrophoneIcon, current: true },
  { name: 'Thumbnail', href: '#', icon: UsersIcon, current: false },
  { name: 'Banner', href: '#', icon: UsersIcon, current: false },
  { name: 'Square', href: '#', icon: FolderIcon, current: false },
  { name: 'Story', href: '#', icon: CalendarIcon, current: false },
];

export default function Nav({ items = navigation, ...props }) {
  return (
    <nav {...props}>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classnames(
            item.current
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
          )}
        >
          <item.icon
            className={classnames(
              item.current
                ? 'text-gray-500'
                : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-4 w-4'
            )}
            aria-hidden="true"
          />
          {item.name}
        </a>
      ))}
    </nav>
  );
}
