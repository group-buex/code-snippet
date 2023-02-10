import React from "react";
import { useSnippet } from "#/src/store/snippet";
import FormButton from "./FormButton";
type FileFormProps = {
  getFileList: () => void;
};

const FileForm: React.FC<FileFormProps> = () => {
  const { selectedFile, setSelectedFile } = useSnippet((state) => state);

  const handleChangeFileData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelectedFile({ ...selectedFile, [name]: value });
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
        <FormButton />
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
