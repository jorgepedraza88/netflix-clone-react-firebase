import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute z-[100] flex w-full items-center justify-between p-4">
      <Link to="/">
        <img src={logo} className="w-40" />
      </Link>
      {user?.email ? (
        <div className="pr-4">
          <Link to="/account">
            <button className="pr-4 text-white">Account</button>
          </Link>
          <button 
          onClick={handleLogout}
          className="cursor-pointer rounded bg-red-600 px-6 py-2 text-white transition-all hover:bg-red-800">
            Logout
          </button>
        </div>
      ) : (
        <div className="pr-4">
          <Link to="/login">
            <button className="pr-4 text-white">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="cursor-pointer rounded bg-red-600 px-6 py-2 text-white transition-all hover:bg-red-800">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
