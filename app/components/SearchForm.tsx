import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useJobList } from "~/contexts/JobListContextProvider";

export default function SearchForm() {
  const { searchText, onSearchTextChange } = useJobList();

  return (
    <div role="search" className="search">
      <MagnifyingGlassIcon className="search__icon" width={20} height={20} />

      <input
        className="search__input"
        spellCheck="false"
        type="text"
        aria-label="Search jobs"
        placeholder="Find remote developer jobs..."
        name="search"
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
    </div>
  );
}
