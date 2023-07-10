import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-[500px] px-[50px] py-[100px] bg-white rounded-lg">
      <p className="mb-4 font-semibold text-4xl">Welcome back</p>
      <p className="mb-6">Continue with Google or enter you details.</p>
      <div className="mb-10">
        <button className="w-full  py-3 bg-[#4285f4] text-white font-semibold text-center rounded-lg">
          Log in with Google
        </button>
      </div>

      <p className="mb-10 text-center">Or</p>

      <LoginForm />

      <p className="text-center">
        Don't have account?{" "}
        <span className="font-semibold">
          <Link to="/signup">Sign up for free</Link>
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
