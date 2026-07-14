import { FaUser } from "react-icons/fa";
import "../styles/navbar.css"
import Logo from "../assets/logogem-removebg-preview.png"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg py-1 sticky-top">
         <a className="navbar-brand" href="#">
      <img src={Logo} alt="Gems Kitchen" className="logo-img" />
    </a>
  <div className="container">

   

    <ul className="navbar-nav mx-auto gap-4">

      <li className="nav-item">
        <a className="nav-link active-nav">Dashboard</a>
      </li>

      <li className="nav-item">
        <a className="nav-link">Add Item</a>
      </li>

      <li className="nav-item">
        <a className="nav-link">Meal Planner</a>
      </li>

      <li className="nav-item">
        <a className="nav-link">My Items</a>
      </li>

    </ul>

    <div className="d-flex align-items-center gap-3">
      <FaUser size={20} />
    </div>

  </div>
</nav>
  );
}