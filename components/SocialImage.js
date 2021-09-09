import useGeneratePng from '../lib/useGeneragePng';
import DownloadButton from './DownloadButton';
import Spinner from './Spinner';

/**
 *
 * 1. Rename component to FiresideBanner
 * 2. Setup form controls for:
 *  - Episode number
 *  - Podcast title
 *  - Podcast Title Size: Large (3.25rem), Extra Large (4rem)
 *
 */

export default function SocialImage({
  name,
  width,
  height,
  podEpNum,
  podTitle,
  podTitleSize,
  bgUrl,
  pixelRatio = 1,
}) {
  const { generatePng, captureRef, loading } = useGeneratePng(
    width,
    height,
    name,
    podEpNum,
    pixelRatio
  );

  return (
    <div className="p-8">
      <div className="mb-4">
        <h1 className="text-4xl font-semibold text-gray-800 font-sansCondensed">
          {name}
        </h1>
        <p className="mt-1 font-mono text-sm text-gray-500">
          Size: {width * pixelRatio}&times;{height * pixelRatio}
        </p>
      </div>
      <div>
        <div
          ref={captureRef}
          id={`${name.replace(/\s/g, '')}`}
          className="grid items-center grid-rows-2 px-4 pb-6 bg-blue-300 bg-cover"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${bgUrl})`,
          }}
        >
          <div
            className="row-start-2 text-center text-white"
            style={{
              maxWidth: `${width}px`,
            }}
          >
            <p
              className="mt-6 mb-1 text-2xl font-extrabold tracking-widest uppercase "
              style={{ textShadow: '0 8px 20px rgba(0,0,0,0.5)' }}
            >
              Episode {podEpNum}
            </p>
            <p
              className="font-bold font-sansCondensed"
              style={{
                fontSize: podTitleSize,
                lineHeight: 1,
                textShadow: '0 8px 20px rgba(0,0,0,0.5)',
              }}
            >
              {podTitle}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <DownloadButton loading={loading} handleClick={generatePng} />
      </div>
    </div>
  );
}
