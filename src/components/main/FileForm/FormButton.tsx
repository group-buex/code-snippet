import React from "react";
import { toast } from "react-toastify";
import { IoCopy } from "react-icons/io5";
import { RxReset } from "react-icons/rx";
import { useSnippet } from "#/src/store/snippet";
import { copyToClipboard } from "#/src/utils";

const FormButton = () => {
  const { selectedFile, setSelectedFile } = useSnippet((state) => state);

  const handleResetForm = () => {
    setSelectedFile({ prevFilename: "", filename: "", content: "" });
  };

  const handleCopyForm = () => {
    if (!selectedFile?.content) {
      toast.error("Select file first.");
    } else {
      const result = copyToClipboard(selectedFile?.content);
      if (result) {
        toast.success("Successfully Copied.");
      }
    }
  };

  return (
    <div className="flex justify-between items-center border-l-2">
      <button className="h-full px-4" onClick={handleResetForm}>
        <RxReset />
      </button>
      <button className="h-full px-4" onClick={handleCopyForm}>
        <IoCopy />
      </button>
    </div>
  );
};

export default FormButton;
