import SavedShows from "../components/SavedShows";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user } = UserAuth();
  console.log(user);

  return (
    <>
      <div className="h-[400px] w-full text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/f3196491-4053-44b1-91ed-27c657833a97/ES-en-20220606-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="fondo"
          className="absolute h-[400px] w-full object-cover"
        />
        <div className="fixed top-0 left-0 h-[400px] w-full bg-neutral-900/70"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl font-bold text-white md:text-5xl">My account</h1>
        </div>
      </div>
      <div className="my-6 h-full w-full px-12 text-white">
        <p className="text-2xl">Account Information</p>
        <p className="mt-2 px-6">User: {user.email}</p>
      </div>
      <SavedShows  />
    </>
  );
};

export default Account;
