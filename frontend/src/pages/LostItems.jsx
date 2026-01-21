import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/api";
import ItemCard from "../components/ItemCard";

function LostItems() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const res = await API.get("/api/items/lost");
        setItems(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLostItems();
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
            placeholder="Search lost items..."
            className="bg-[#0f172a] px-4 py-2 rounded outline-none w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => navigate("/items/create?type=lost")}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
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

        {/* Content */}
        {loading ? (
          <p className="text-gray-400">Loading lost items...</p>
        ) : filteredItems.length === 0 ? (
          <p className="text-gray-400">No lost items found.</p>
        ) : (
          <div className="columns-1 md:columns-2 gap-6 space-y-8">

            {filteredItems.map(item => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LostItems;
