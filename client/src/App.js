import { useState, useEffect } from "react";
import { HomePage } from "./containers/HomePage/index";
import CropCart from "./containers/CropCart";
import { Switch, Route } from "react-router-dom";
import Weather from "./containers/Weather";
import { Navbar } from "./components/Navbar";
import Loader from "./containers/Weather/Loader";
import { useLocation } from "react-router-dom";
import ChatIcon from "./components/ChatIcon";
import SignIn from "./containers/Auth/signin";
import Signup from "./containers/Auth/signup";
import Helpline from "./containers/Helpline";
import useToken from "./customHooks/useToken";
import NewsApp from "./containers/News";

function App() {
  const { token, setToken } = useToken();
  //user token
  const [user, setUserLogin] = useState(token ? parseJwt(token) : {});
  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    let currentUser = JSON.parse(window.atob(base64));
    return {
      duration: currentUser.duration,
      email: currentUser.email,
      exp: currentUser.exp,
      iat: currentUser.iat,
      _id: currentUser.userId,
    };
  }
  console.log(token);

  const [loading, setloading] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return loading === false ? (
    <div>
      {pathname === "/" ? <div /> : <Navbar setUserLogin={setUserLogin} />}
      <Switch>
        <Route path="/helpline">
          <Helpline />
        </Route>
        <Route path="/signin">
          <SignIn setUserLogin={setUserLogin} />
        </Route>
        <Route path="/signup">
          <Signup setUserLogin={setUserLogin} />
        </Route>
        <Route path="/cropcart">
          <CropCart />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/news">
          <NewsApp />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <ChatIcon />
    </div>
  ) : (
    <Loader />
  );
}

export default App;
