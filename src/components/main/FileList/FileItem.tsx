import React from "react";
import clsx from "clsx";
import { SnippetType } from "#/src/type";

type FileItemProps = {
  filename: string;
  selectedFile: SnippetType;
  onClickFile: (filename: string) => void;
};

const FileItem: React.FC<FileItemProps> = ({
  filename,
  selectedFile,
  onClickFile,
}) => {
  const isActive = filename === selectedFile?.prevFilename;
  return (
    <div key={filename}>
      <button
        id={filename}
        className={clsx(
          "text-left py-2 px-4 rounded-md w-full",
          isActive
            ? "text-sky-500 font-semibold dark:text-sky-400"
            : "font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400"
        )}
        onClick={() => onClickFile(filename)}
      >
        {filename}
      </button>
    </div>
  );
};

export default FileItem;
