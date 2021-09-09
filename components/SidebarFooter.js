import { ExternalLinkIcon } from '@heroicons/react/outline';

export default function SidebarFooter() {
  return (
    <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
      <div className="flex-shrink-0 block w-full">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="mb-2 text-sm font-medium leading-tight text-gray-600">
              Built with ❤️ and 🍺 in sunny Destin, Florida.
            </p>
            <p className="text-xs font-medium text-gray-400">
              <a
                className="inline-flex items-center hover:text-gray-600"
                href="https://github.com/martylouis/tfd-generate-social-imgs"
                rel="noopener nofollow noreferrer"
                target="_blank"
              >
                <span>View on Github</span>
                <ExternalLinkIcon className="w-3 h-3 ml-0.5 text-current" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
