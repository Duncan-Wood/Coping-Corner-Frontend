import { useState, useContext } from "react";
import { SignInUser } from "../Services/Auth";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../UserProvider";



export default function Login() {
    let navigate = useNavigate()
  const {setUser } = useContext(UserProvider);
  const {toggleAuthenticated } = useContext(UserProvider);

  const [formValues, setFormValues] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({ username: "", password: "" });
    setUser(payload);
    toggleAuthenticated(true);
    navigate("/LoggedHome");
    console.log("logged in!")
  };
  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input
            onChange={handleChange}
            name="username"
            type="username"
            placeholder="your username"
            value={formValues.username}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            required
          />
        </div>
        <button disabled={!formValues.username || !formValues.password}>
            Log In
          </button>
      </form>
    </div>
  );
}
