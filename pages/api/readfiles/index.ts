// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  filenames: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const root = process.env.PROJECT_ROOT as string;
    const dirRelativeToPublicFolder = process.env.PUBLIC_FOLDER as string;

    console.log(";;;", dirRelativeToPublicFolder);
    const dir = path.resolve("./static", dirRelativeToPublicFolder);
    const filenames = fs.readdirSync(dir);

    // const files = filenames.map((name) =>
    //   path.join(root, dirRelativeToPublicFolder, name)
    // );

    res.status(200).json({ filenames });
  } catch (error) {
    console.log(error);
  }
}
