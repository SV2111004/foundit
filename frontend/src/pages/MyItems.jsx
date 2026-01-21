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

  // 🗑️ DELETE HANDLER
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/api/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // UI se bhi remove karo
      setItems(items.filter((item) => item._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete item");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <div className="pt-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-1">My Items</h2>
        <p className="text-gray-400 mb-6">📞 Contact: {user.phone}</p>

        {loading ? (
          <p className="text-gray-400">Loading your items...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-400">
            You haven’t posted any lost or found items yet.
          </p>
        ) : (
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {items.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                showDelete={true}          // 👈 delete button enabled
                onDelete={handleDelete}   // 👈 delete handler
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyItems;
