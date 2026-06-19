import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import { useJobList } from "~/contexts/JobListContextProvider";
import Spinner from "./Spinner";
import Error from "./Error";

export default function Sidebar() {
  const { isLoading, isError, jobs, searchText, isPlaceholderData } =
    useJobList();

  if (isError) {
    return (
      <div className="sidebar__error">
        <Error message="Sorry, could not load jobs." />
      </div>
    );
  }

  if (searchText && jobs?.length === 0) {
    return (
      <div className="sidebar__text">
        <Error message={`No results for "${searchText}"`} />
      </div>
    );
  }

  return (
    <>
      <div className="sidebar__top">
        <ResultsCount />
      </div>

      {(isLoading || isPlaceholderData) && (
        <div className="sidebar__loading">
          <Spinner />
        </div>
      )}

      {!isLoading && !isPlaceholderData && jobs && <JobList jobs={jobs} />}

      <PaginationControls />
    </>
  );
}
