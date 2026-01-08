import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Landing() {
    const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/src/assets/jaypee.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-xs"></div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 text-emerald-100">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Lost it? <br />
          <span className="text-amber-200">List it</span> <br />
          <span className="text-white">Find it!!</span>
        </h1>

        <p className="mt-4 max-w-xl text-gray-200">
          Helping you reconnect with your lost items across campus.
        </p>

        <button onClick={() => navigate("/login")} className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-lg font-semibold" >
          
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
