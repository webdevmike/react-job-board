import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useJobsQuery } from "~/hooks/useJobsQuery";
import { useJobList } from "~/contexts/JobListContextProvider";
import Spinner from "~/components/Spinner";
import Error from "~/components/Error";

export default function Home() {
  const { data, isLoading, isError } = useJobsQuery(1);
  const { onPageChange } = useJobList();
  const jobs = data?.jobs;
  const navigate = useNavigate();

  useEffect(() => {
    const firstJobId = jobs?.[0]?.id;
    if (!firstJobId) return;
    onPageChange(1);
    navigate(`/${firstJobId}`);
  }, [jobs, navigate, onPageChange]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message="Sorry, could not load jobs." />;
  }

  return null;
}
