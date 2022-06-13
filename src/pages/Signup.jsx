import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/f3196491-4053-44b1-91ed-27c657833a97/ES-en-20220606-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="fondo"
          className="absolute hidden h-full w-full object-cover sm:block"
        />
        <div className="fixed top-0 left-0 h-screen w-full bg-neutral-900/60"></div>
        <div className="fixed top-10 z-50 w-full px-4 py-24">
          <div className="mx-auto h-[500] max-w-[450px] rounded-lg bg-neutral-900/80 text-white">
            <div className="mx-auto max-w-[320px] py-16">
              <h1 className="text-3xl font-bold">Sign up</h1>
              <form onSubmit={handleSubmit} className="flex w-full flex-col py-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="my-2 rounded-md bg-neutral-700 p-3 outline-none focus:border-[1px] focus:border-red-600"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="my-2 rounded-md bg-neutral-700 p-3 outline-none focus:border-[1px] focus:border-red-600"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="my-6 rounded bg-red-600 py-3 font-bold transition-all hover:bg-red-800">
                  Sign Up
                </button>
                <div className="flex items-center justify-between">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8 text-center font-semibold text-red-600">
                  <span className="mr-2 text-white">Already subscribed to Netflix?</span>{" "}
                  <Link to="/login">Sign in</Link>
                </p>
                <p className="text-center font-bold text-red-600">
                  {" "}
                  THIS A FAKE NETFLIX, Enter dummy data
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
