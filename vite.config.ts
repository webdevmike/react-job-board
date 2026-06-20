import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import { basePath } from "./app/config";

export default defineConfig({
  plugins: [reactRouter()],
  base: basePath,
  resolve: {
    tsconfigPaths: true,
  },
});
