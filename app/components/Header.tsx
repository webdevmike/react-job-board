import { Link } from "react-router";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <h1>
          <Link to="/">Job Board</Link>
        </h1>
      </div>
      <SearchForm />
    </header>
  );
}
