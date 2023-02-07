import { create } from "zustand";

type UseSnippetState = {
  searchFilename: string;
  filenameList: string[];
  selectedFile: { prevFilename: string; filename: string; content: string };
  setFilenameList: (data: string[]) => void;
  setSelectedFile: (data: {
    prevFilename: string;
    filename: string;
    content: string;
  }) => void;
  setSearchFilename: (data: string) => void;
};

export const useSnippet = create<UseSnippetState>((set) => ({
  searchFilename: "",
  filenameList: [],
  selectedFile: { prevFilename: "", filename: "", content: "" },
  setFilenameList: (data: string[]) => set({ filenameList: data }),
  setSelectedFile: (data: {
    prevFilename: string;
    filename: string;
    content: string;
  }) =>
    set({
      selectedFile: {
        prevFilename: data.prevFilename,
        filename: data.filename,
        content: data.content,
      },
    }),
  setSearchFilename: (data: string) => set({ searchFilename: data }),
}));
