function ItemCard({ item, showDelete = false, onDelete }) {
  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
      
      {/* 🖼️ Image */}
      {item.image && (
        <div className="w-full mb-4 bg-black/20 rounded overflow-hidden flex justify-center">
          <img
            src={`http://localhost:5000${item.image}`}
            alt={item.title}
            className="max-h-64 object-contain"
          />
        </div>
      )}

      {/* Title + Status */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-white">
          {item.title}
        </h3>

        <span
          className={`text-xs px-2 py-1 rounded ${
            item.status === "lost"
              ? "bg-red-500/20 text-red-400"
              : "bg-emerald-500/20 text-emerald-400"
          }`}
        >
          {item.status.toUpperCase()}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 mt-2 text-sm">
        {item.description}
      </p>

      {/* Details */}
      <div className="mt-4 text-sm text-gray-300 space-y-1">
        <p>
          <span className="text-gray-500">Category:</span> {item.category}
        </p>
        <p>
          <span className="text-gray-500">Location:</span> {item.location}
        </p>
        <p>
          <span className="text-gray-500">Date:</span>{" "}
          {new Date(item.date).toLocaleDateString()}
        </p>
        <p>
          <span className="text-gray-500">Posted by:</span>{" "}
          {item.postedBy?.name}
        </p>

        {/* 📞 Phone */}
        {item.postedBy?.phone && (
          <p className="text-emerald-400 font-medium">
            📞 {item.postedBy.phone}
          </p>
        )}
      </div>

      {/* 🗑️ Delete Button (ONLY in MyItems) */}
      {showDelete && (
        <button
          onClick={() => onDelete(item._id)}
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm"
        >
          🗑️ Delete Item
        </button>
      )}
    </div>
  );
}

export default ItemCard;
