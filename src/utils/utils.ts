export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function round(value: number) {
  return Number(value.toFixed(2));
}

export const getAmount = (amount?: number) => {
  return amount ?? 0;
};

export function getImgSize(imgSrc: string, callback: any) {
  const newImg = new Image();
  newImg.onload = function () {
    const height = newImg.height;
    const width = newImg.width;
    console.log("width", width);
    console.log("height", height);
    callback({ width, height });
  };
  newImg.src = imgSrc; // this must be done AFTER setting onload
}
