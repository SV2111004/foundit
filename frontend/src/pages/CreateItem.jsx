import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CreateItem() {
  const navigate = useNavigate();
  const type = new URLSearchParams(useLocation().search).get("type");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="pt-24 px-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          Post {type === "lost" ? "Lost" : "Found"} Item
        </h2>

        <p className="text-gray-400 mb-4">
          Form yahan aayega (backend connect next step)
        </p>

        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default CreateItem;
