import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function({logout,user}){
    console.log(user);
    return(
        <nav className="navbar">
        <div className="navbar-container">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/stats">Stats</Link>
            </div>
            <div className="nav-auth">
                <div className="user-details">
                    <span className="user-name">{user.name}<i  className="scroll-down"></i></span>
                    <div onClick={logout} className="logout-btn">Logout</div>
                </div>
                <img src={`${user.profileImageUrl}`} alt=""  />
            </div>
        </div>
    </nav>
    )
}