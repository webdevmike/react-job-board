import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img
        src="https://bytegrad.com/course-assets/js/2/logo.svg"
        alt="Logo"
        className="logo__img"
      />
    </Link>
  );
}
