import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-menu">

      <Link to="/">
        <img className="logo-img" alt="logo gamer" src="/logo.jpg"></img>
      </Link>
      <Link to="/category/monitor">Monitores</Link>
      <Link to="/category/teclados">Teclados</Link>
      <Link to="/category/mouses">Mouses</Link>
      <CartWidget />
    </nav>
  );
}

export default NavBar;