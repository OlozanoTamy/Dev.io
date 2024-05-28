import axios from "axios";
import { useState, useEffect } from "react";
import PostEvent from "./PostEvent";
import useStore from "../../state/store";
import Navbar from "../Navbar";

function Post() {
  const { data, isLoading, error, fetchData } = useStore();
  const [posts, setPosts] = useState([]);

  ///Usar el hook use efect para solicita info a la APi
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  //Si data existe asignarla a posts
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
  return (
    <div>
      {posts.map((post) => {
        return (
          <PostEvent
            key={`Post-key-${post.title}`}
            title={post.title}
            id={post.id}
            date={post.date}
            content={post.content}
          />
        );
      })}
    </div>
  );
}
export default Post;
