import { Link, useParams } from "react-router";
import type { JobItem } from "~/lib/types";

type JobListItemProps = {
  job: JobItem;
};

export default function JobListItem({ job }: JobListItemProps) {
  const { id } = useParams();

  if (!id) return null;

  return (
    <li
      className={["job-item", Number(id) === job.id && "job-item--active"]
        .filter(Boolean)
        .join(" ")}
    >
      <Link to={`/${job.id}`} className="job-item__link">
        <div className="job-item__badge">9T</div>

        <div className="job-item__middle">
          <h3 className="job-item__title">{job.title}</h3>
          <p className="job-item__company">9th Tech</p>
        </div>

        <div className="job-item__right">
          <time className="job-item__time">2d</time>
        </div>
      </Link>
    </li>
  );
}
