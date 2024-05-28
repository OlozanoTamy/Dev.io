import style from "./PostEvent.module.css";
const PostEvent = ({ title, date, content, id }) => {
  console.log(title);
  return (
    <div className={style.post}>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{content}</p>
      <p>User id: {id}</p>
    </div>
  );
};
export default PostEvent;
