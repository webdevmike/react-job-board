import type { PageDirection } from "~/lib/types";

type PaginationButtonProps = {
  direction: PageDirection;
  onClick: () => void;
  disabled: boolean;
};

export default function PaginationButton({
  direction,
  onClick,
  disabled,
}: PaginationButtonProps) {
  return (
    <button
      className={`pagination__button pagination__button--${direction}`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === "previous" ? "Previous" : "Next"}
    </button>
  );
}
