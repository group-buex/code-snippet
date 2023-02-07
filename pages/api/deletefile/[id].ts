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
    const id = req.query.id as string;

    const dirRelativeToPublicFolder = "snippets";
    const dir = path.join(__dirname, "./public", dirRelativeToPublicFolder);

    const fileDir = `${dir}/${id}`;
    fs.access(fileDir, fs.constants.F_OK, (err) => {
      if (err) {
        throw err;
      }

      fs.unlink(fileDir, (err) =>
        err
          ? console.log(err)
          : console.log(`${fileDir} 를 정상적으로 삭제했습니다`)
      );
    });

    res.status(200).json("success");
  } catch (error) {
    console.log(error);
  }
}
