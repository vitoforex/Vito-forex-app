import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GenericButton } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Please provide your email address. It is mandatory."),
  firstName: yup
    .string()
    .min(2, "Please enter a first name with at least 2 characters.")
    .max(20)
    .required("Please provide your first name. It is mandatory."),
  lastName: yup
    .string()
    .min(2, "Please enter a last name with at least 2 characters.")
    .max(20)
    .required("Please provide your last name. It is mandatory."),
  username: yup
    .string()
    .min(2, "Please enter a user name with at least 2 characters.")
    .max(30)
    .required("Please provide your user name. It is mandatory."),
  password: yup
    .string()
    .min(6, "Please enter a password with at least 6 characters.")
    .max(200)
    .required("Please provide your password. It is mandatory."),
  confirmPwd: yup
    .string()
    .required("Please retype your password")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [passwordTypeField, setPasswordTypeField] = useState('password')

  function handlePasswordVisibleToggle(){
    if (passwordTypeField==='password'){
      setPasswordVisibleIcon(faEye);
      setPasswordTypeField('text')
   } else {
      setPasswordVisibleIcon(faEyeSlash)
      setPasswordTypeField('password')
   }
  }

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibleIcon, setPasswordVisibleIcon] = useState(faEyeSlash)
  const navigate = useNavigate();

  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function firstNameHandler(e) {
    setFirstName(e.target.value);
  }
  function lastNameHandler(e) {
    setLastName(e.target.value);
  }
  function userNameHandler(e) {
    setUserName(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  async function onSubmitHandler(form_data) {
   console.log(form_data)
  
    let data = {
      email,
      password,
      username,
      first_name: firstName,
      last_name: lastName,
    };
    console.log(data)
    try {
      let response = await axios.post("/auth/register", JSON.stringify(form_data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      toast("Registered You Successfully! You can login.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return navigate("/login");
    } catch (error) {
      toast("Error happened while Registering you! Try again.", {
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
      <div className="">
        <section className="bg-gray-50  py-52">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              to="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
            >
              Register to continue
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Create an account
                </h1>
                <div
                 
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@company.com"
                      required=""
                      onChange={emailHandler}
                      {...register("email")}
                    />
                    <p className="text-red-600 text-[13px]">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="John"
                      required=""
                      onChange={firstNameHandler}
                      {...register("firstName")}
                    />
                    <p className="text-red-600 text-[13px]">
                      {errors.firstName?.message}
                    </p>
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Doe"
                      required=""
                      onChange={lastNameHandler}
                      {...register("lastName")}
                    />
                    <p className="text-red-600 text-[13px]">
                      {errors.lastName?.message}
                    </p>
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      User name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Doe"
                      required=""
                      onChange={userNameHandler}
                      {...register("username")}
                    />
                    <p className="text-red-600 text-[13px]">
                      {errors.username?.message}
                    </p>
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <div className="">
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
                  </div>
                  <div>
                    <label
                      for="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Confirm password
                    </label>

                    <div className="relative">
                    <input
                      type={passwordTypeField}
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required=""
                      {...register("confirmPwd")}
                    />
                    <span
                      class="text-gray-400 flex justify-around items-center cursor-pointer absolute top-4 right-4 z-40 "
                      onClick={handlePasswordVisibleToggle}
                    >
                     {passwordTypeField==='password' ? <FontAwesomeIcon class=" h-6 w-6 z-50 text-gray-400" icon={faEyeSlash} size="1x"  />: <FontAwesomeIcon class=" h-6 w-6 z-50 text-gray-400" icon={faEye} size="1x"  />}
                    </span>
                  </div>
                    
                   
                    <p className="text-red-600 text-[13px]">
                      {errors.confirmPwd?.message}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          to="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <GenericButton
                    onClick={handleSubmit(onSubmitHandler)}
                    text={"Create an account"}
                    classes="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  />

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      to="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      onClick={() => navigate("/login")}
                    >
                      Login here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
