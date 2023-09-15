import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserIsLoggedIn } from "../../features/authSlice";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { GenericButton } from "../../components";

const Page = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    let response = await axios.post("http://127.0.0.1:8000/auth/login", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response)
    if (response.status === 200){
      dispatch(updateUserIsLoggedIn(true))
      localStorage.setItem('isAuthenticated', 'true');
      return navigate('/dashboard')

    }
  }

  return (
    <main className="flex-grow">
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            to="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            Login to continue
          </a>
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                  onChange={emailHandler}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    onChange={passwordHandler}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  
                  <a
                    to="#"
                    className="text-sm font-medium text-primary-600 hover:underline "
                  >
                    Forgot password?
                  </a>
                </div>
                <GenericButton
                  onClick={onSubmitHandler}
                  text={'Sign in'}
                  classes="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                />
                  
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <a
                    to="#"
                    className="font-medium text-primary-600 hover:underline "
                    onClick={()=>navigate('/register')}
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
