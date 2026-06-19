import JobItemContent from "~/components/JobItemContent";
import Sidebar from "~/components/Sidebar";
import Background from "~/components/Background";
import Container from "~/components/Container";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function JobDetails() {
  return (
    <>
      <Background />
      <Header />
      <Container>
        <Sidebar />
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}
