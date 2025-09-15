import { Link } from "react-router-dom";
import "../App.css";
function Header() {
  return (
    <nav className=" navbar-expand-lg custom-navbar">
      <a className="navbar-brand fw-bold text-white" href="#">
        MTNM
      </a>

      <ul className="navbar-nav mx-auto center-links">
        <li className="nav-item">
          <Link className="nav-link active text-white" to="/">
            Equipment
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Blog
          </a>
        </li>
      </ul>

      <a className="nav-link account-link text-white" href="#">
        <i className="fa-regular fa-circle-user"></i> Account
      </a>
    </nav>
  );
}

export default Header;
