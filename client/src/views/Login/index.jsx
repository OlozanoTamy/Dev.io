import { useForm } from "react-hook-form";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //es funcion premite enviar los datos y que sean recibidos por el servidor para que verifique si el email existe en la base de datos
  const sendDataToServer = async (data) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      //si la respuespues es correcta recibe un toker que va a ser guardado en localstorage y va a redirigir hacia el perfil si no va a mostrar una alerta
      console.log(response.json, "Esta es la respuesta");
      if (response.ok) {
        const { token, username } = await response.json();
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        navigate("/profile"); // Usa navigate para redirigir al usuario
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    sendDataToServer(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <legend>Por favor ingresa tus datos</legend>
        {/* register your input into the hook by invoking the "register" function */}
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

        <input className={style.btnInput} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
