import "./App.css";
import Header from "./Pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Footer/Footer";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import CheckOut from "./Pages/CheckOut/CheckOut";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/NotFound/NotFound";
import GetUpdates from "./Pages/GetUpdates/GetUpdates";
import ThankYou from "./Pages/ThankYou/ThankYou";
import ForgotPass from "./Pages/ForgotPass/ForgotPass";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/getupdates" element={<GetUpdates />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
