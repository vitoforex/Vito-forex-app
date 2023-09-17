import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Signals,
  Courses,
  Blog,
  Contact,
  Mentorship,
  Login,
  Register,
  Password_reset,
  Dashboard

} from "./pages";
import { Navbar, Footer } from "./components";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  console.log(process.env)
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
