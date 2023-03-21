import { useState } from "react";
import { RegisterUser } from "../Services/Auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault()
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
    });
    setFormValues({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/login");
  };
  return (
    <div className="nli">
      <div className="formwrapper">
        <h1 className = "register-welcome">Join our corner to get free access to a community library of support resources.</h1>
        <form className="register" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">username</label><br></br>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              value={formValues.username}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">email</label><br></br>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">password</label><br></br>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">confirm password</label><br></br>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              !formValues.username ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
