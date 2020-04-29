export default (svg: string) => {
  const img = new Image();
  img.src = svg;
  return img;
};
