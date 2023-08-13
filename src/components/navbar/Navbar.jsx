import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Public Transportation</span>
        <div className="navItems">
          <Link to="/register"> <button className="navButton">Register</button></Link>
          <Link to="/login"><button className="navButtonL">Login</button></Link>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar