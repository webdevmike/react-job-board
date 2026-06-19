import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { jobItemsSchema } from "~/lib/types";
import { DATA_URL, JOBS_PER_PAGE, SIMULATED_DELAY_MS } from "~/lib/constants";

export function useJobsQuery(page: number, searchText = "") {
  return useQuery({
    queryKey: ["jobs", page, searchText],
    placeholderData: keepPreviousData,
    queryFn: async () => {
      const res = await fetch(DATA_URL);

      // delay to simulate network latency
      await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));

      const data = await res.json();
      const allJobs = jobItemsSchema.parse(data);

      const filteredJobs = searchText
        ? allJobs.filter((job) => {
            // Search by title
            return job.title.toLowerCase().includes(searchText.toLowerCase());
          })
        : allJobs;

      const start = (page - 1) * JOBS_PER_PAGE;
      return {
        jobs: filteredJobs.slice(start, start + JOBS_PER_PAGE),
        totalJobCount: filteredJobs.length,
      };
    },
  });
}
