import { ArrowDownIcon } from "@radix-ui/react-icons";

export default function Sorting() {
  return (
    <section className="sorting">
      <ArrowDownIcon className="sorting__icon" />

      <button className="sorting__button sorting__button--relevant">
        Relevant
      </button>

      <button className="sorting__button sorting__button--recent">
        Recent
      </button>
    </section>
  );
}
