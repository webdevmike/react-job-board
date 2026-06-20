import JobItemContent from "~/components/JobItemContent";
import Sidebar from "~/components/Sidebar";
import Background from "~/components/Background";
import Container from "~/components/Container";
import Header from "~/components/Header";

export function meta() {
  return [
    { title: "Job Board" },
    { name: "description", content: "Job Board" },
  ];
}

export default function JobDetails() {
  return (
    <>
      <Background />
      <Header />
      <Container>
        <div className="sidebar">
          <Sidebar />
        </div>
        <JobItemContent />
      </Container>
    </>
  );
}
