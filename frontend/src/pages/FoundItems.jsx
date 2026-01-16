import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/api";
import ItemCard from "../components/ItemCard";

function FoundItems() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoundItems = async () => {
      try {
        const res = await API.get("/api/items/found");
        setItems(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoundItems();
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <div className="pt-28 px-6 max-w-6xl mx-auto">
        {/* Top Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          <input
            type="text"
            placeholder="Search found items..."
            className="bg-[#0f172a] px-4 py-2 rounded outline-none w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => navigate("/items/create?type=found")}
            className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded"
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

        {/* Content */}
        {loading ? (
          <p className="text-gray-400">Loading found items...</p>
        ) : filteredItems.length === 0 ? (
          <p className="text-gray-400">No found items found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map(item => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FoundItems;
