import { useQuery } from "@tanstack/react-query";
import { jobItemSchema, type JobItem } from "~/lib/types";
import { DATA_URL, SIMULATED_DELAY_MS } from "~/lib/constants";

export function useJobDetailsQuery(id: string | undefined) {
  return useQuery({
    queryKey: ["job-details", id],
    enabled: id !== undefined,
    queryFn: async () => {
      const res = await fetch(DATA_URL);

      // delay to simulate network latency
      await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));

      const data = await res.json();
      const thisJob = data.find((job: JobItem) => job.id === Number(id));
      const jobDetails = jobItemSchema.parse(thisJob);

      return jobDetails;
    },
  });
}
