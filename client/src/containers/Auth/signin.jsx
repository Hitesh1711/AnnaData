import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  Input,
  Button,
  ErrorMsg,
} from "./formStyles";
import useToken from "../../customHooks/useToken";
import { Marginer } from "../../components/Margin";

function Login(props) {
  const history = useHistory();
  const { token, setToken } = useToken();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [err, setError] = useState("");

  //api call for login
  const login = () => {
    axios
      .post("http://localhost:5000/auth/signin", user)
      .then((res) => {
        alert("signin successfull !!");
        setToken(res.data?.token);
        props.setUserLogin(res.data.message);
        history.push("/");
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
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={login}>Sign In</Button>
        </ButtonContainer>
        <Link to={{ pathname: "/signup" }} style={{ textDecoration: "none" }}>
          Sign Up
        </Link>
      </MainContainer>
    </div>
  );
}

export default Login;
