import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product">Electronics</Link>
      <Link to="/food">Food</Link>
    </nav>
    
    </>
  );
}

export default Home;
