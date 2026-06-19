import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useJobList } from "~/contexts/JobListContextProvider";

export default function SearchForm() {
  const { searchText, onSearchTextChange } = useJobList();

  return (
    <form action="#" className="search">
      <button type="submit">
        <MagnifyingGlassIcon className="search__icon" width={20} height={20} />
      </button>

      <input
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
    </form>
  );
}
