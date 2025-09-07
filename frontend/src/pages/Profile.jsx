import { LogOut } from "lucide-react";

const Profile = () => {
  const fullName = localStorage.getItem("fullName");
  return (
    <div className="min-h-screen text-xl flex justify-center flex-col items-center my-auto">
      <h1 className="my-2">{fullName}</h1>
      <button
        className="flex  hover:cursor-pointer hover:bg-red-200 justify-center items-center px-5 py-5 rounded-xl bg-gray-200 text-red-500 hover:duration-300 hover:ease-in-out"
        onClick={localStorage.removeItem("fullName")}
      >
        Logout
        <LogOut />
      </button>
    </div>
  );
};

export default Profile;
