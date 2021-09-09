export function makePodEpFileName(podEpNum, name, width, height, fileType) {
  const formattedName = name.replace(/\s/g, '');

  return `Ep${podEpNum}-${formattedName}-${width}x${height}.${fileType}`;
}
