import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import logo from "../images/log.jpg";
import "./head.css";

const Head = () => {
  return (
    <header className="header">
    <div className="logo">
    <Link to="/"><img src={logo} alt="logo" /></Link>
    </div>
    <>
      <h1>Dazzling Jewels</h1>
    </>
       
    <nav className="nav">
     <ul>
        <li><Link to="/fav"><MdFavoriteBorder className="ii"/></Link></li>
        <li><Link to="/contact"><IoMdContact className="ii"/></Link></li>
        <li><Link to="/search"><IoSearchSharp className="ii"/></Link></li>
        <li><Link to="/cart"><MdOutlineShoppingCart className="ii"/></Link></li>
        <li><Link to="/admin"><RiAdminLine className="ii"/></Link></li>
      </ul>
        </nav>
  </header>
  );
}

export default Head;
