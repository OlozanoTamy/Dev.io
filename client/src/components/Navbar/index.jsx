import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <>
      <div className={style.navBar}>
        <div className={style.logo}>
          <h2>Dev.io</h2>
        </div>
        <div className={style.links}>
          <Link to={"/"}>Home</Link>
          <Link to={"#"}>My Profile</Link>
          <Link to={"#"}>Liked Post</Link>
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
