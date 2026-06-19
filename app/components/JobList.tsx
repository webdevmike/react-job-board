import type { JobItem } from "~/lib/types";
import JobListItem from "./JobListItem";

export function JobList({ jobs }: { jobs: JobItem[] }) {
  return (
    <ul className="job-list">
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobList;
