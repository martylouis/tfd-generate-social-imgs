import download from 'downloadjs';
import { toPng } from 'html-to-image';
import { useRef, useState } from 'react';

export default function useGeneratePng(
  width = '800',
  height = '800',
  name,
  podEpNum,
  pixelRatio = 1
) {
  const captureRef = useRef();

  const [loading, setLoading] = useState(false);

  async function generatePng(e) {
    e.preventDefault();

    if (!captureRef?.current) {
      return;
    }

    try {
      setLoading(true);
      const imgBase64 = await toPng(captureRef.current, {
        quality: 1,
        pixelRatio: pixelRatio,
        width: width,
        height: height,
      });
      setLoading(false);
      download(
        imgBase64,
        `Ep${podEpNum}-${name.replace(/\s/g, '')}-${width * pixelRatio}x${
          height * pixelRatio
        }.png`
      );
    } catch (err) {
      console.error(err);
    }
  }

  return {
    generatePng,
    captureRef,
    loading,
    width,
    height,
  };
}
