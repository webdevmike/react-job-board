import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useJobsQuery } from "~/hooks/useJobsQuery";
import Spinner from "~/components/Spinner";
import Error from "~/components/Error";

export default function Home() {
  const { data: jobs, isLoading, isError } = useJobsQuery(1);
  const navigate = useNavigate();

  useEffect(() => {
    const firstJobId = jobs?.[0]?.id;
    if (!firstJobId) return;
    navigate(`/${firstJobId}`);
  }, [jobs, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message="Sorry, could not load jobs." />;
  }

  return null;
}
