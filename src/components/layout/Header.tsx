import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex justify-between items-center py-3 px-5 bg-gray-200">
      <ul className="flex justify-between gap-10">
        <li className="text-blue-500 font-semibold hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="text-blue-500 font-semibold hover:underline">
          <Link to="/protected">Protected (use hook)</Link>
        </li>
        <li className="text-blue-500 font-semibold hover:underline">
          <Link to="/profile">Profile (required login)</Link>
        </li>
        <li className="text-blue-500 font-semibold hover:underline">
          <Link to="/admin">Admin (required login)</Link>
        </li>
      </ul>

      {isAuthenticated ? (
        <div className="flex">
          <div className="flex justify-between items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <span className="capitalize">{user.username}</span>
          </div>

          <button className="ml-5 text-blue-500 font-semibold">Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
