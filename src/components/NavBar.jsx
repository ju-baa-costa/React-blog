import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navigationBar">
      <h1>Blog da ju</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <br />
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
