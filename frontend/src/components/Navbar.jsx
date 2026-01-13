import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 w-full z-20 px-6 py-4 flex justify-between items-center text-white">
      <div
        className="text-3xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Found<span className="text-red-500">It</span>
      </div>

      <button
        onClick={() => navigate("/login")}
        className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition"
      >
        Login / Signup
      </button>
    </nav>
  );
}

export default Navbar;
