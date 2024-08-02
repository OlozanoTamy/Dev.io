import { useNavigate } from "react-router-dom";
import style from "./Aside.module.css";
const Aside = () => {
  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault(), navigate("/create-post");
  };
  return (
    <>
      <aside className={style.aside}>
        <div className={style.button}>
          <button onClick={handleCreate}>Crear Nuevo Post</button>
        </div>
        <div className={name}>Ultimas Entradas</div>
        <div className={name}>Post destacado</div>
      </aside>
    </>
  );
};

export default Aside;
