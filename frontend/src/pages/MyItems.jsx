import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function MyItems() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="pt-24 px-6">
        <h2 className="text-2xl font-bold mb-4">My Items</h2>

        <p className="text-gray-400 mb-6">
          Your posted lost & found items will appear here.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-700 px-4 py-2 rounded"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default MyItems;
