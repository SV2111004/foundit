function ItemCard({ item }) {
  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
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

      <p className="text-gray-400 mt-2 text-sm">
        {item.description}
      </p>

      <div className="mt-4 text-sm text-gray-300 space-y-1">
        <p><span className="text-gray-500">Category:</span> {item.category}</p>
        <p><span className="text-gray-500">Location:</span> {item.location}</p>
        <p><span className="text-gray-500">Date:</span> {new Date(item.date).toLocaleDateString()}</p>
        <p><span className="text-gray-500">Posted by:</span> {item.postedBy?.name}</p>
      </div>
    </div>
  );
}

export default ItemCard;
