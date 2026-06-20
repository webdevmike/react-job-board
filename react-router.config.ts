import type { Config } from "@react-router/dev/config";
import { basePath } from "./app/config";

export default {
  ssr: false,
  basename: basePath,
} satisfies Config;
