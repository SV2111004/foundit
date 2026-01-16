import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayName =
    user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1);

  return (
    <nav className="fixed top-0 w-full z-20 px-6 py-3 flex justify-between items-center bg-black/30 backdrop-blur text-white">
      {/* Logo */}
      <div
        className="text-3xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Found<span className="text-red-500">It</span>
      </div>

      {/* Right Side */}
      {token && user ? (
        <div className="relative" ref={dropdownRef}>
          {/* Avatar Trigger */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 cursor-pointer select-none"
          >
            <div
              className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center font-semibold text-white"
              title={displayName}
            >
              {displayName.charAt(0)}
            </div>

            <span
              className={`text-sm transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </div>

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-3 w-48 bg-[#0b1220] border border-white/10 rounded-lg shadow-xl overflow-hidden transform transition-all duration-200 origin-top ${
              open
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            {/* Name header */}
            <div className="px-4 py-2 text-xs text-gray-400 border-b border-white/10">
              Signed in as
              <div className="text-sm text-white font-medium">
                {displayName}
              </div>
            </div>

            <button
              onClick={() => {
                navigate("/my-items");
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-white/10 transition"
            >
              📦 My Items
            </button>

            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition"
        >
          Login / Signup
        </button>
      )}
    </nav>
  );
}

export default Navbar;
