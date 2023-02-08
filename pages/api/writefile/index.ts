// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { prevFilename, filename, content } = req.body;

    const dirRelativeToPublicFolder = process.env.PUBLIC_FOLDER as string;
    const dirRelativeToPublicFolderRoot = process.env
      .PUBLIC_FOLDER_ROOT as string;

    const dir = path.resolve(
      dirRelativeToPublicFolderRoot,
      dirRelativeToPublicFolder
    );

    const fileDir = `${dir}/${prevFilename}`;
    const newFileDir = `${dir}/${filename}`;

    // create
    if (!prevFilename) {
      console.log("create file");
      fs.writeFileSync(newFileDir, content);
      return res.status(200).json("success");
    }

    // update
    if (prevFilename === filename) {
      console.log("update file");
      fs.writeFileSync(fileDir, content);
      return res.status(200).json("success");
    } else {
      // rename
      console.log("rename file");
      fs.rename(fileDir, newFileDir, function (err) {
        if (err) throw err;
        return res.status(200).json("success");
      });
    }
  } catch (error) {
    console.log(error);
  }
}
