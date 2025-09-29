import { Link } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <nav className="navigation">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Buttons Generator
          </Link>
        </div>
      </nav>

      <main className="main-content">{children}</main>
    </div>
  );
}

export default Layout;
