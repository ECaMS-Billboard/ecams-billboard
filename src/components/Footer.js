import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/credits" className="footer-link">Credits</Link>
        <span className="footer-divider">|</span>
        <Link to="/resources" className="footer-link">Resources</Link>
        <span className="footer-divider">|</span>
        <Link to="/tutorial" className="footer-link">Tutorial</Link>
        <span className="footer-divider">|</span>
        <span className="footer-year">
          &copy; {new Date().getFullYear()} ECaMS Billboard
        </span>
      </div>
    </footer>
  );
}

export default Footer;
