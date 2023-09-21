import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserIsLoggedIn } from "../../features/authSlice";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GenericButton } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Please provide your email address. It is mandatory."),
  password: yup
    .string()
    .min(6, "Please enter a password with at least 6 characters.")
    .max(200)
    .required("Please provide your password. It is mandatory."),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const token = Cookies.get("csrftoken");

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibleIcon, setPasswordVisibleIcon] = useState(faEyeSlash)
  const [passwordTypeField, setPasswordTypeField] = useState('password')
  const navigate = useNavigate();

  function handlePasswordVisibleToggle(){
    if (passwordTypeField==='password'){
      setPasswordVisibleIcon(faEye);
      setPasswordTypeField('text')
   } else {
      setPasswordVisibleIcon(faEyeSlash)
      setPasswordTypeField('password')
   }
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  async function onSubmitHandler(e) {
    //e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      let response = await axios.post("/auth/login", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response);
      if (response.status === 200) {
        dispatch(updateUserIsLoggedIn(true));
        localStorage.setItem("isAuthenticated", "true");
        toast("Logged in successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return navigate("/dashboard");
      }
    } catch {
      toast("An error occured while logging you in!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="space-y-4 md:space-y-6"
              >
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
                    {...register("email")}
                  />
                  <p className="text-red-600 text-[13px]">
                    {errors.email?.message}
                  </p>
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      onChange={passwordHandler}
                      type={passwordTypeField}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                      required=""
                      {...register("password")}
                    />
                    <span
                      class="text-gray-400 flex justify-around items-center cursor-pointer absolute top-4 right-4 z-40 "
                      onClick={handlePasswordVisibleToggle}
                    >
                     {passwordTypeField==='password' ? <FontAwesomeIcon class=" h-6 w-6 z-50 text-gray-400" icon={faEyeSlash} size="1x"  />: <FontAwesomeIcon class=" h-6 w-6 z-50 text-gray-400" icon={faEye} size="1x"  />}
                    </span>
                  </div>
                  <p className="text-red-600 text-[13px]">
                    {errors.password?.message}
                  </p>
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
                  type={"submit"}
                  text={"Sign in"}
                  classes="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                />

                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <a
                    to="#"
                    className="font-medium text-primary-600 hover:underline "
                    onClick={() => navigate("/register")}
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
