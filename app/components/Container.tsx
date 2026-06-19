import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="container">
    { children }
  </div>;
}
