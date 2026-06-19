import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useJobList } from "~/contexts/JobListContextProvider";

export default function SearchForm() {
  const { searchText, onSearchTextChange } = useJobList();

  return (
    <div role="search" className="search">
      <MagnifyingGlassIcon className="search__icon" width={20} height={20} />

      <input
        spellCheck="false"
        type="text"
        placeholder="Find remote developer jobs..."
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
    </div>
  );
}
