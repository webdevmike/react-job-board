import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";
import { useJobList } from "~/contexts/JobListContextProvider";
import Spinner from "./Spinner";
import Error from "./Error";

export default function Sidebar() {
  const { isLoading, isError, jobs } = useJobList();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message="Sorry, could not load jobs." />;
  }

  if (!jobs) {
    return null;
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount />
        <SortingControls />
      </div>

      {jobs.map((job) => (
        <div key={job.id}>{job.title}</div>
      ))}

      <JobList />
      <PaginationControls />
    </div>
  );
}
