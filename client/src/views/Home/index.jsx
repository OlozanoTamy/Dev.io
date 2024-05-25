import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import useStore from "../../state/store";

const Home = () => {
  const { data, isLoading, error, fetchData } = useStore();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  if (isLoading) {
    return <>Cargando...</>;
  }
  if (error) {
    return <>Error: {error.message}</>;
  }

  console.log(data);

  return (
    <div>
      {posts.map((post) => {
        <Post key={`Post-key-${post.title}`} />;
      })}
    </div>
  );
};

export default Home;
