import { useState, useEffect } from "react";
import Aside from "../../components/Aside";
import style from "./UserProfile.module.css";
import Post from "../../components/Post";
const UserProfile = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
      <div>{username ? <h1>Hola, {username}!</h1> : <h1>Hola!</h1>}</div>
      <div className={style.container}>
        <Aside className={style.aside} />
        <div className={style.content}>
          <h3>Tus ultimos Post</h3>
          <Post />
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
