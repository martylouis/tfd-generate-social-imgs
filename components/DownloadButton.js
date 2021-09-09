import { classnames } from 'tailwindcss-classnames';
import Spinner from './Spinner';

export default function DownloadButton({
  text = 'Download',
  handleClick = (e) => e.preventDefault,
  loading = false,
}) {
  return (
    <button
      className={classnames(
        'inline-flex items-center transition-all bg-pink-600 text-white px-5 h-[42px] text-lg rounded font-bold hover:bg-pink-700 focus:bg-pink-700',
        loading && 'opacity-50 cursor-not-allowed'
      )}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? (
        <>
          <Spinner className="w-4 h-4 mr-2 -ml-2 text-white animate-spin" />{' '}
          <span>Processing&hellip;</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}
