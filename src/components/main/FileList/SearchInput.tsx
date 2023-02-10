import { useSnippet } from "#/src/store/snippet";
import React from "react";
import { MdSearch, MdOutlineClose } from "react-icons/md";

const SearchInput = () => {
  const { searchFilename, setSearchFilename } = useSnippet((state) => state);

  const handleChangeSearchFilename = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setSearchFilename(value);
  };

  const handleClickRemoveSearchFilename = () => {
    searchFilename && setSearchFilename("");
  };

  return (
    <div className="border-b-2 relative">
      <input
        type="text"
        className="px-8 py-4 h-12 w-full"
        value={searchFilename}
        placeholder="Search Filename..."
        onChange={handleChangeSearchFilename}
      />
      <button
        className="absolute top-0 right-0 h-full w-[48px] flex justify-center items-center"
        onClick={handleClickRemoveSearchFilename}
      >
        {searchFilename ? <MdOutlineClose /> : <MdSearch />}
      </button>
    </div>
  );
};

export default SearchInput;
