import React, { useState } from "react";
import axios from "axios";
import FileItem from "#/src/components/main/FileList/FileItem";
import SearchInput from "#/src/components/main/FileList/SearchInput";
import { useSnippet } from "#/src/store/snippet";

type FileListProps = {
  loading: boolean;
};

const FileList: React.FC<FileListProps> = ({ loading }) => {
  const { filenameList, searchFilename, selectedFile, setSelectedFile } =
    useSnippet((state) => state);

  const handleClickFile = async (filename: string) => {
    const response = await axios.get(`/api/readfiles/${filename}`);

    if (response?.status === 200) {
      setSelectedFile({
        prevFilename: filename,
        filename,
        content: response?.data?.content || "None contents",
      });
    }
  };

  return (
    <div className="border-2 border-r-0 gap-2 rounded-l-lg min-w-[320px] h-full overflow-y-auto">
      <SearchInput />
      <div className="p-4">
        {loading ? (
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-6"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-6"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-6"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-6"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-6"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : filenameList?.length === 0 ? (
          <div>None</div>
        ) : (
          filenameList
            ?.filter((item) => item.includes(searchFilename))
            .map((filename) => (
              <FileItem
                key={filename}
                filename={filename}
                selectedFile={selectedFile}
                onClickFile={handleClickFile}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default FileList;
