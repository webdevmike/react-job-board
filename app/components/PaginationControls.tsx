import { useJobList } from "~/contexts/JobListContextProvider";
import PaginationButton from "./PaginationButton";
import { JOBS_PER_PAGE } from "~/lib/constants";

export default function Pagination() {
  const { page, totalJobCount, onPageChange } = useJobList();

  const totalPages = Math.ceil(totalJobCount / JOBS_PER_PAGE);

  const showPreviousButton = page > 1;
  const showNextButton = page < totalPages;

  return (
    <section className="pagination">
      {showPreviousButton && (
        <PaginationButton
          direction="previous"
          onClick={() => onPageChange(page - 1)}
        />
      )}

      <div>
        Page {page} of {totalPages}
      </div>

      {showNextButton && (
        <PaginationButton
          direction="next"
          onClick={() => onPageChange(page + 1)}
        />
      )}
    </section>
  );
}
