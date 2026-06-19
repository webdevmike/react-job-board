import { useJobList } from "~/contexts/JobListContextProvider";
import PaginationButton from "./PaginationButton";
import { JOBS_PER_PAGE } from "~/lib/constants";

export default function PaginationControls() {
  const { page, totalJobCount, onPageChange } = useJobList();

  const totalPages = Math.ceil(totalJobCount / JOBS_PER_PAGE);

  const showPreviousButton = page > 1;
  const showNextButton = page < totalPages;

  return (
    <section className="pagination">
      <PaginationButton
        direction="previous"
        onClick={() => onPageChange(page - 1)}
        disabled={!showPreviousButton}
      />

      <div className="pagination__page-count">
        Page {page} of {totalPages}
      </div>

      <PaginationButton
        direction="next"
        onClick={() => onPageChange(page + 1)}
        disabled={!showNextButton}
      />
    </section>
  );
}
