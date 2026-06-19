import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import { useJobList } from "~/contexts/JobListContextProvider";
import Spinner from "./Spinner";
import Error from "./Error";

export default function Sidebar() {
  const { isLoading, isError, jobs, searchText } = useJobList();

  if (isLoading) {
    return (
      <div className="sidebar__loading">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="sidebar__error">
        <Error message="Sorry, could not load jobs." />
      </div>
    );
  }

  if (!jobs) {
    return null;
  }

  if (searchText && jobs.length === 0) {
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

      <JobList jobs={jobs} />
      <PaginationControls />
    </>
  );
}
