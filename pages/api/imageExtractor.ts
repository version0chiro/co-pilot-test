// import next api respon and request
import type { NextApiRequest, NextApiResponse } from "next";

export default function imageExtractor(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // retrive random image from the internet

  const url = "https://picsum.photos/200/300/?random";

  // return the image as a canvas
  res.status(200).json({ image: url });
}
