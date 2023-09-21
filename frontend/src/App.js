import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Signals,
  Courses,
  CourseDetails,
  Blog,
  BlogDetails,
  Contact,
  Mentorship,
  Login,
  Register,
  Password_reset,
  Dashboard,

} from "./pages";
import { Navbar, Footer } from "./components";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserIsLoggedIn } from "./features/authSlice";
import { useDispatch } from "react-redux";
import '@fortawesome/fontawesome-svg-core/styles.css'



function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
     async function getIsUserLoggedInStatus(){
      try {
       const response = await axios.get('/auth/user_status');
       console.log(response)
       if (response.data.authenticated === false){
        localStorage.setItem("isAuthenticated", "false");
        dispatch(updateUserIsLoggedIn(false))
       }else{
        localStorage.setItem("isAuthenticated", "true");
        dispatch(updateUserIsLoggedIn(true))
       }
      } catch (error) {
        console.log(error)
      }
     }
     getIsUserLoggedInStatus();
  })
  return (
    <main className="App ">
     <ToastContainer />
      <Navbar/>
   <div className="flex flex-col">
   <Routes>
        <Route
          path="/"
          element={
            <Home/>
          }
        />
        <Route
          path="/about"
          element={
            <About/>
          }
        />
        <Route
          path="/blog"
          element={
            <Blog/>
          }
        />
        <Route
          path="/blog/:id"
          element={<BlogDetails/>}
        />
        <Route
          path="/contact"
          element={
           <Contact/>
          }
        />
        <Route
          path="/courses"
          element={
           <Courses/>
          }
        />
        <Route
          path="/courses/:id"
          element={
           <CourseDetails/>
          }
        />
        <Route
          path="/login"
          element={
            <Login/>
          }
        />
        <Route
          path="/mentorship"
          element={
            <Mentorship/>
          }
        />
        <Route
          path="/password_reset"
          element={
            <Password_reset/>
          }
        />
        <Route
          path="/payment/success*"
          element={
            <h1 className="text-6xl bg-slate-600 text-white font-extrabold p-20">
              Success
            </h1>
          }
        />
        <Route
          path="/posts"
          element={
            <h1 className="text-6xl bg-slate-600 text-white font-extrabold p-20">
              posts
            </h1>
          }
        />
        <Route
          path="/register"
          element={
           <Register/>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard/>
          }
        />
        <Route
          path="/signals"
          element={
            <Signals/>
          }
        />
      </Routes>
   </div>
      <Footer/>
    </main>
  );
}

export default App;
