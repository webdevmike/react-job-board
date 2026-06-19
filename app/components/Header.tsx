import { Link } from "react-router";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <h1 className="header__title">
          <Link to="/" className="header__title-link">Job Board</Link>
        </h1>
      </div>
      <SearchForm />
    </header>
  );
}
