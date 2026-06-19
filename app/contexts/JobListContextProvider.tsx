import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { useDebounce } from "~/hooks/useDebounce";
import { useJobsQuery } from "~/hooks/useJobsQuery";
import type { JobItem } from "~/lib/types";

type JobListContextType = {
  page: number;
  searchText: string;
  isLoading: boolean;
  isError: boolean;
  jobs: JobItem[] | undefined;
  totalJobCount: number;
  isPlaceholderData: boolean;
  onSearchTextChange: (text: string) => void;
  onPageChange: (page: number) => void;
};

const JobListContext = createContext<JobListContextType | undefined>(undefined);

type JobListProviderProps = {
  children: ReactNode;
};

export function JobListProvider({ children }: JobListProviderProps) {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 300);
  const { data, isLoading, isError, isPlaceholderData } = useJobsQuery(
    page,
    debouncedSearchText,
  );

  const jobs = data?.jobs;
  const totalJobCount = data?.totalJobCount ?? 0;

  const handleSearchTextChange = (text: string) => {
    setPage(1);
    setSearchText(text);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const value: JobListContextType = {
    page,
    searchText,
    isLoading,
    isError,
    jobs,
    totalJobCount,
    isPlaceholderData,
    onSearchTextChange: handleSearchTextChange,
    onPageChange: handlePageChange,
  };

  return <JobListContext value={value}>{children}</JobListContext>;
}

export function useJobList(): JobListContextType {
  const context = useContext(JobListContext);
  if (context === undefined) {
    throw new Error("useJobList must be used within a JobListProvider");
  }
  return context;
}
