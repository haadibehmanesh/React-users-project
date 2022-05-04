import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./app";
import Home from "./components/home";
import Users from "./components/users";
//import Login from "./components/login";
import Register from "./components/register";
import User from "./components/user";
import NotFound from "./components/notFound";
import Dashboard from "./components/dashboard";
import Login from "./components/functional/login";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path="/" element={<App />} >
        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<User />} />

        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>



    </Routes>
  </BrowserRouter>



  , rootElement);