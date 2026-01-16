import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <Navbar />

      {/* Slanted transition */}
      <div className="relative h-48 bg-linear-to-br from-[#1e293b] to-[#020617]">
        <div
          className="absolute bottom-0 left-0 w-full h-14 bg-[#020617]"
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative -mt-24 px-6 max-w-6xl mx-auto ">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white">
            What happened today?
          </h2>
          <p className="text-gray-400 mt-1">
            Choose the option that best describes your situation.
          </p>
        </div>

        {/* Main panel – toned down */}
        <div className="
          bg-white/5
          backdrop-blur-md
          border border-white/10
          rounded-[2.5rem]
          p-16
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            
            {/* LOST */}
            <div
              onClick={() => navigate("/items/lost")}
              className="
                cursor-pointer
                bg-gradient-to-br from-[#3b1a1a] to-[#2a1212]
                rounded-3xl
                p-12
                shadow-[0_12px_30px_rgba(255,0,0,0.18)]
                hover:shadow-[0_18px_40px_rgba(255,0,0,0.25)]
                transform -rotate-2 hover:-rotate-1 hover:scale-[1.04]
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-semibold text-red-300 mb-4">
                😟 Lost something
              </h3>

              <p className="text-gray-200 leading-relaxed text-[15px]">
                Browse lost items reported across campus or post details of what
                you misplaced.
              </p>

              <div className="mt-8 font-medium text-red-400">
                View lost items →
              </div>
            </div>

            {/* FOUND */}
            <div
              onClick={() => navigate("/items/found")}
              className="
                cursor-pointer
                bg-gradient-to-br from-[#123c2c] to-[#0f2f23]
                rounded-3xl
                p-12
                shadow-[0_12px_30px_rgba(0,255,170,0.18)]
                hover:shadow-[0_18px_40px_rgba(0,255,170,0.25)]
                transform rotate-2 hover:rotate-1 hover:scale-[1.04]
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-semibold text-emerald-300 mb-4">
                😊 Found something
              </h3>

              <p className="text-gray-200 leading-relaxed text-[15px]">
                Post information about the item you found and help return it to
                its owner.
              </p>

              <div className="mt-8 font-medium text-emerald-400">
                Post found item →
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
