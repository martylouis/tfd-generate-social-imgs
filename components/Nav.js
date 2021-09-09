import { classnames } from 'tailwindcss-classnames';

export default function Nav({ items, ...props }) {
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
