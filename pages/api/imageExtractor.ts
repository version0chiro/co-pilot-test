export default function imageExtractor() {
  // retrive random image from the internet
  const img = new Image();
  img.src = "https://pbs.twimg.com/media/C-xSX-WUAAQQ4XE.jpg";
  // return the image as a canvas
  return img;
}
