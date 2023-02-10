import React from "react";
import Link from "next/link";
import { CgAddR } from "react-icons/cg";

const BASH_LINK =
  "https://github.com/group-buex/code-snippet/tree/main/static/snippets";

const NewFileButton = () => {
  return (
    <div className="mb-6 w-fit px-4">
      <Link href={BASH_LINK} target="_blank">
        <button className="flex gap-4 p-4 rounded-lg">
          <CgAddR />
          Create New File
        </button>
      </Link>
    </div>
  );
};

export default NewFileButton;
