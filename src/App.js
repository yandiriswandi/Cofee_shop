// import css bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";

//! import style Css
import "./styles/styles.css"

//! import pages

//todo get Api from config
import { API, setAuthToken } from "../src/config/api";
import { Auth, DetailProduct, ErrorPage, Home} from "./pages";
import AddProduct from  './pages/admin/AddProduct';

// Init token on axios every time the app is refreshed here ...
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  // //use useNavigate
  // let navigate = useNavigate();
  // //init userContext here...
  // const [state, dispatch] = useContext(UserContext);

  // // Redirecting Auth here...
  // useEffect(() => {
  //   if (!state.isLogin) {
  //     navigate("/");
  //   } else {
  //     if (state.user.role === "admin") {
  //       navigate("/transaction");
  //     } else if (state.user.role === "user") {
  //       navigate("/landingPage");
  //     }
  //   }
  // }, [state]);

  // // Create function for check user token here ...
  // const checkUser = async () => {
  //   try {
  //     const response = await API.get("/checkAuth");

  //     if (response.status === 404) {
  //       return dispatch({
  //         type: "AUTH_ERROR",
  //       });
  //     }

  //     let payload = response.data.data.user;
  //     payload.token = localStorage.token;

  //     return dispatch({
  //       type: "USER_SUCCESS",
  //       payload,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // Call function check user with useEffect didMount here ...
  // useEffect(() => {
  //   checkUser();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/user" element={<Home />} />
      <Route path="/detailProduct" element={<DetailProduct />} />
      <Route path="/AddProduct" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
