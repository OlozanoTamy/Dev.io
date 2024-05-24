import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import useStore from "../../state/store";
const Home = () => {
  const { fetchData, data } = useStore();
  const [message, setMessage] = useState("");
  // useEffect(() => {
  //   fetchData();
  //   setMessage(data);
  // }, []);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setMessage(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      getPost();
    };
  }, []);
  return (
    <div>
      <Navbar />
      <h2>Hola bienvenido</h2>
      <p>Petro</p>
    </div>
  );
};

export default Home;
