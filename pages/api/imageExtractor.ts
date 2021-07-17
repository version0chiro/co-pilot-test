// import next api respon and request
import type { NextApiRequest, NextApiResponse } from "next";

export default async function imageExtractor(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // retrive random image from the internet

  // generate a random number between 0 and 255
  const randomNumber = Math.floor(Math.random() * 256);

//   const url = await fetch(
//     "https://picsum.photos/200/200/?random=" + randomNumber
//   ).then((response) => response);

  // return the image as a canvas
  res.status(200).json({ image: "https://picsum.photos/200/200/?random=" + randomNumber });
}
