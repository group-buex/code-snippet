// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import getConfig from "next/config";

type Data = {
  filename: string;
  content: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const id = req.query.id as string;

    const dirRelativeToPublicFolder = "snippets";
    const dir = path.join(__dirname, "./public", dirRelativeToPublicFolder);
    const fileDir = `${dir}/${id}`;
    const text = fs.readFileSync(fileDir, "utf8");

    res.status(200).json({ filename: id, content: text });
  } catch (error) {
    console.log(error);
  }
}
