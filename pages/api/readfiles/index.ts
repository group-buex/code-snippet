// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import getConfig from "next/config";

type Data = {
  filenames: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // const { serverRuntimeConfig } = getConfig();
    const dirRelativeToPublicFolder = "snippets";
    // const root = process.env.PROJECT_ROOT as string;

    // console.log(
    //   "---",
    //   path.resolve(__dirname),
    //   __dirname,
    //   root,
    //   serverRuntimeConfig.PROJECT_ROOT,
    //   serverRuntimeConfig.PROJECT_ROOT2
    // );
    // const dir = path.join(process.cwd(), "./static", dirRelativeToPublicFolder);
    // const filenames = fs.readdirSync(dir);

    const dir = path.resolve("./static", dirRelativeToPublicFolder);
    const filenames = fs.readdirSync(dir);

    const files = filenames.map((name) =>
      path.join("/", dirRelativeToPublicFolder, name)
    );
    console.log("+++", filenames);
    console.log("----", files);

    res.status(200).json({ filenames });
  } catch (error) {
    console.log(error);
  }
}
