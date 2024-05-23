import axios from "axios";
import { useState, useEffect } from "react";

function Post() {
  const [posts, setPosts] = useState([]);

  //el use efect sirve par hacer una solicitud get a el servidor con la base de datos de manera sincronica
  useEffect(() => {
    //Creamos una funcion de fetchpost que le solicita al server la info (Express)
    async function fetchPosts() {
      try {
        const response = await axios.get("/api/posts");
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <div>
            <p key={post.id}>{post.title}</p>
            <p>{post.content}</p>
            <p>{post.date}</p>
            <p>{post.id}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Post;
