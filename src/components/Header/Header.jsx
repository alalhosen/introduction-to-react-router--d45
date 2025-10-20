import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <nav>
        <span><p>My Website</p></span>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
