import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function LostItems() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="pt-24 px-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search lost items..."
            className="px-4 py-2 rounded bg-gray-800 outline-none"
          />

          <button
            onClick={() => navigate("/items/create?type=lost")}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Post Lost Item
          </button>


          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-700 px-4 py-2 rounded"
          >
            Back
          </button>
        </div>

        <p className="text-gray-400">
          Lost items list will appear here.
        </p>
      </div>
    </div>
  );
}

export default LostItems;
