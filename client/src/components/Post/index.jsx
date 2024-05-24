import axios from "axios";
import { useState, useEffect } from "react";
import PostEvent from "./PostEvent";
import useStore from "../../state/store";

function Post() {
  const { data, isLoading, error, fetchData } = useStore();
  const post = data;
  //el use efect sirve par hacer una solicitud get a el servidor con la base de datos de manera sincronica
  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
}

export default Post;
