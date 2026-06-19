import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import type { PageDirection } from "~/lib/types";

type PaginationButtonProps = {
  direction: PageDirection;
  onClick: () => void;
};

export default function PaginationButton({
  direction,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      className={`pagination__button pagination__button--${direction}`}
      onClick={onClick}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon />
          Previous
        </>
      )}
      {direction === "next" && (
        <>
          <ArrowRightIcon />
          Next
        </>
      )}
    </button>
  );
}
