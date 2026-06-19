import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route(":id", "routes/JobDetails.tsx"),
] satisfies RouteConfig;
