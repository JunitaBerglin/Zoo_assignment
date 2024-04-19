import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "white" }}>
              . START .
            </Link>
          </li>
          <li>
            <Link
              to="/animals"
              style={{ textDecoration: "none", color: "white" }}>
              ANIMALS .
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
