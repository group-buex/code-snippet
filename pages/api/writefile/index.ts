// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import getConfig from "next/config";

type Data = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { prevFilename, filename, content } = req.body;

    const dirRelativeToPublicFolder = "snippets";
    const dir = path.join(__dirname, "./public", dirRelativeToPublicFolder);

    const fileDir = `${dir}/${prevFilename}`;
    const newFileDir = `${dir}/${filename}`;

    // create
    if (!prevFilename) {
      fs.writeFileSync(newFileDir, content);

      return res.status(200).json("success");
    }

    // update
    if (prevFilename === filename) {
      fs.appendFile(fileDir, content, function (err) {
        if (err) throw err;
        return res.status(200).json("success");
      });
    } else {
      // rename
      fs.rename(fileDir, newFileDir, function (err) {
        if (err) throw err;
        return res.status(200).json("success");
      });
    }
  } catch (error) {
    console.log(error);
  }
}
