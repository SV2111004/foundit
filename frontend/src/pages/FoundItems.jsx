import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function FoundItems() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="pt-24 px-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search found items..."
            className="px-4 py-2 rounded bg-gray-800 outline-none"
          />

          <button
            onClick={() => navigate("/items/create?type=found")}
            className="bg-emerald-600 px-4 py-2 rounded"
          >
            Post Found Item
          </button>

          

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-700 px-4 py-2 rounded"
          >
            Back
          </button>
        </div>

        <p className="text-gray-400">
          Found items list will appear here.
        </p>
      </div>
    </div>
  );
}

export default FoundItems;
