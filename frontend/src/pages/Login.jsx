import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/feili-logo.jpg";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { setMsg } from "../redux/msgSlice";
import { useDispatch, useSelector } from "react-redux";
import f_Request from "../ultis/ktsrequest";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const { currentMsg } = useSelector((state) => state.msg);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) return navigate("/dashboard");
    if (currentMsg) {
      toast.warn(currentMsg);
      dispatch(setMsg(null));
    }
    <ToastContainer />;
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await f_Request.post("/auth/signin", {
        name,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/admin");
    } catch (err) {
      dispatch(loginFailure());
      err.response
        ? toast.error(err.response.data.message)
        : toast.error("Network Error!");
      <ToastContainer />;
    }
  };
  return (
    <div className="flex h-screen items-center bg-hero-login bg-cover bg-fixed bg-center bg-no-repeat dark:bg-gray-900">
      <div className="mx-auto flex w-full flex-col items-center justify-center px-6 py-8 md:h-screen md:w-4/6 lg:w-8/12 lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <div className="flex justify-center">
              <img
                src={logo}
                className="mr-3 h-32 lg:h-32"
                alt="ktscorp Logo"
              />
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="text"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="username"
                  required="abc"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  required="abc"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={handleLogin}
              >
                Đăng nhập
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
