import { useState, useEffect } from "react";

const UserProfile = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return <div>{username ? <h1>Hola, {username}!</h1> : <h1>Hola!</h1>}</div>;
};
export default UserProfile;
