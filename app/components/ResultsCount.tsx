import { useJobList } from "~/contexts/JobListContextProvider";

export default function ResultsCount() {
  const { totalJobCount } = useJobList();

  return <p className="results-count">{totalJobCount} results</p>;
}
