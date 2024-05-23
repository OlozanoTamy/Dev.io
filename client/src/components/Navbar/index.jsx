import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className={style.navBar}>
        <div className={style.logo}>
          <h2>Dev.io</h2>
        </div>
        <div className={style.links}>
          <Link to={"#"}>Home</Link>
          <Link to={"#"}>My Profile</Link>
          <Link to={"#"}>Liked Post</Link>
          <button>Register</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
