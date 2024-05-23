import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await axios("/api");
        const data = await response.data;
        setMessage(data);
      } catch (error) {}
    };
    getMessage();
  }, []);
  return (
    <div>
      <Navbar />
      <h2>Hola bienvenido</h2>
      <p>Petro</p>;
    </div>
  );
};

export default Home;
