import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";
import ItemCard from "../components/ItemCard";

function MyItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchMyItems = async () => {
      try {
        const res = await API.get("/api/items");

        // sirf current user ke items
        const myItems = res.data.filter(
          (item) => item.postedBy?._id === user.id
        );

        setItems(myItems);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyItems();
  }, [user.id]);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <div className="pt-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">My Items</h2>

        {loading ? (
          <p className="text-gray-400">Loading your items...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-400">
            You haven’t posted any lost or found items yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyItems;
