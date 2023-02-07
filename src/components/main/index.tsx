"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import FileList from "#/src/components/main/FileList";
import FileForm from "#/src/components/main/FileForm";
import { useSnippet } from "#/src/store/snippet";

const Main = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { setFilenameList } = useSnippet((state) => state);

  useEffect(() => {
    getFileList();
  }, []);

  const getFileList = async () => {
    const response = await axios.get("/api/readfiles");

    if (response?.status === 200 && response?.data?.filenames?.length > 0) {
      setFilenameList(response?.data?.filenames);
    }

    setLoading(false);
  };

  return (
    <div className="flex p-8 w-full h-[100vh]">
      <div className="flex w-full h-full">
        <FileList loading={loading} />
        <FileForm getFileList={getFileList} />
      </div>
    </div>
  );
};

export default Main;
