import { useForm } from "react-hook-form";
import style from "./Form.module.css";
import axios from "axios";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendDataToServer = async (data) => {
    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const onSubmit = (data) => sendDataToServer(data);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <legend>Formulario Registro</legend>
        {/* register your input into the hook by invoking the "register" function */}
        <label>
          UserName:
          <input
            className={style.username}
            type="text"
            {...register("username", { required: true })}
          />
        </label>

        <label>
          Email:
          <input
            className={style.username}
            type="email"
            {...register("email", { required: true })}
          />
        </label>

        <label>
          Password:
          <input
            className={style.username}
            type="password"
            {...register("password", { required: true })}
          />
        </label>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input className={style.btnInput} type="submit" value="Register" />
      </form>
    </section>
  );
}
