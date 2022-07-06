import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  Input,
  Button,
  ErrorMsg,
} from "./formStyles";
import axios from "axios";
import { Marginer } from "../../components/Margin";

function Signup() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    password_confirmation: "",
  });
  const [err, setError] = useState("");
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //api call for signup
  const register = () => {
    axios
      .post("http://localhost:5000/auth/signup", user)
      .then((res) => {
        alert("Signup sucessful login to continue!!");
        history.push("/signin");
      })
      .catch((error) => {
        setError("*" + error.response.data.errors[0].error);
      });
  };
  return (
    <div>
      <Marginer direction="vertical" margin={90} />
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
          <ErrorMsg msg={err} />
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <Input
            type="text"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <Input
            type="text"
            placeholder="Phone Number"
            name="mobile"
            value={user.mobile}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="password_confirmation"
            value={user.password_confirmation}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={register}>Sign up</Button>
        </ButtonContainer>
        <Link to={{ pathname: "/signin" }} style={{ textDecoration: "none" }}>
          Sign In
        </Link>
      </MainContainer>
    </div>
  );
}

export default Signup;
