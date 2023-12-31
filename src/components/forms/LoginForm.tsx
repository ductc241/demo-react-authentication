import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

import authServices from "../../axios/auth";
import { IErrorResponse } from "../../interfaces/api";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  // const [error, setError] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!(email && password)) {
      toast.error("Username and password are required");
      return;
    }

    try {
      const { data } = await authServices.login({ email, password });

      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (error) {
      if (!isAxiosError<IErrorResponse>(error)) {
        console.log(error);
        return;
      }

      if (error.code === "ERR_NETWORK") {
        toast.error("Server Error");
        return;
      }

      toast.error(`${error.response?.data.message}`);
    }
  };

  return (
    <form className="mb-8" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-5 border-b">
        <input
          type="text"
          placeholder="Email"
          className="w-full py-3 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-8 border-b">
        <input
          type="password"
          placeholder="Password"
          className="w-full py-3 outline-none"
          autoComplete="false"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="w-full py-3 bg-black text-white font-semibold text-center rounded-lg">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
