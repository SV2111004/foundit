import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/api";

function CreateItem() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔑 type = lost / found
  const type = new URLSearchParams(location.search).get("type");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "electronics",
    location: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/api/items",
        {
          ...formData,
          status: type, // 🔥 lost / found auto
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // redirect back after success
      navigate(type === "lost" ? "/items/lost" : "/items/found");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <div className="pt-28 px-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          {type === "lost" ? "Post Lost Item" : "Post Found Item"}
        </h2>

        {error && (
          <p className="bg-red-500/20 text-red-400 p-2 rounded mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Item title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full bg-[#0f172a] px-4 py-2 rounded outline-none"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Describe the item"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full bg-[#0f172a] px-4 py-2 rounded outline-none"
          />

          {/* Category */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-[#0f172a] px-4 py-2 rounded outline-none"
          >
            <option value="electronics">Electronics</option>
            <option value="documents">Documents</option>
            <option value="clothing">Clothing</option>
            <option value="other">Other</option>
          </select>

          {/* Location */}
          <input
            type="text"
            name="location"
            placeholder="Where was it lost / found?"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full bg-[#0f172a] px-4 py-2 rounded outline-none"
          />

          {/* Date */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full bg-[#0f172a] px-4 py-2 rounded outline-none"
          />

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded ${
                type === "lost"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-emerald-600 hover:bg-emerald-700"
              }`}
            >
              {loading ? "Posting..." : "Post Item"}
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-700 px-6 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateItem;
