import React, { useState } from "react";
import axios from "axios";
import { RiDeleteBinLine, RiSave2Line } from "react-icons/ri";
import { RxReset } from "react-icons/rx";
import { useSnippet } from "#/src/store/snippet";
type FileFormProps = {
  getFileList: () => void;
};

const FileForm: React.FC<FileFormProps> = ({ getFileList }) => {
  const { selectedFile, setSelectedFile } = useSnippet((state) => state);

  const handleChangeFileData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelectedFile({ ...selectedFile, [name]: value });
  };
  const handleSaveFile = async () => {
    const { prevFilename, filename, content } = selectedFile;
    const response = await axios.post(`/api/writefile`, {
      prevFilename,
      filename,
      content,
    });

    if (response?.status === 200) {
      setSelectedFile({ prevFilename: filename, filename, content });
      getFileList();
    }
  };

  const handleDeleteFile = async () => {
    const response = await axios.delete(
      `/api/deletefile/${selectedFile?.prevFilename}`
    );

    if (response?.status === 200) {
      getFileList();
      handleResetForm();
    }
  };

  const handleResetForm = () => {
    setSelectedFile({ prevFilename: "", filename: "", content: "" });
  };

  return (
    <div className="flex flex-1 flex-col border-2 rounded-r-lg">
      <div className="flex border-b-2">
        <input
          className="flex-1 p-4 h-12"
          name="filename"
          id="filename"
          spellCheck={false}
          value={selectedFile?.filename}
          onChange={handleChangeFileData}
        />
        <div className="flex justify-between items-center border-l-2">
          <button className="h-full px-4" onClick={handleResetForm}>
            <RxReset />
          </button>
          <button className="h-full px-4" onClick={handleDeleteFile}>
            <RiDeleteBinLine />
          </button>
          <button className="h-full px-4" onClick={handleSaveFile}>
            <RiSave2Line />
          </button>
        </div>
      </div>
      <textarea
        className="p-4 h-full"
        name="content"
        id="content"
        rows={10}
        spellCheck={false}
        value={selectedFile?.content}
        onChange={handleChangeFileData}
      />
    </div>
  );
};

export default FileForm;
