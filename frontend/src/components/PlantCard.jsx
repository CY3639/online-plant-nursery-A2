// Card that works for BOTH admin and customer
// Admin: shows Edit/Delete
// Customer: show Plant

export default function PlantCard({
  p,
  mode = "admin",           // "admin" | "customer"
  onEdit,                   // admin only
  onDelete,                 // admin only
  onBuyOne,                 // customer only
}) {
  const low = Number(p.stock) <= 5;

  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: 14,
      padding: 0,
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
    }}>
      {/* plant image */}
      <div style={{
        width: "100%",
        height: "192px",
        backgroundColor: "#f3f4f6",
        overflow: "hidden"
      }}>
        <img
          src={`/images/plants/${p.image || 'placeholder.jpg'}`}
          alt={p.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }}
          onError={(e) => {
            e.target.src = '/images/plants/placeholder.jpg';
          }}
        />
      </div>

      {/* Content Section */}
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 500 }}>{p.name}</h3>
        <div style={{ fontSize: "16px", color: "#059669", fontWeight: 600 }}>
          ${Number(p.price).toFixed(2)} · {p.category || "—"}
        </div>
        <div style={{ color: "#16a34a", fontSize: "14px" }}>{p.description || "—"}</div>
        <small style={{ fontSize: "14px", color: "#6b7280" }}>
          Stock: {p.stock}
          {low && (
            <span style={{
              marginLeft: 8,
              fontSize: "12px",
              background: "#fecaca",
              color: "#991b1b",
              padding: "2px 6px",
              borderRadius: 10,
              fontWeight: 500
            }}>
              Low
            </span>
          )}
        </small>

        {mode === "admin" ? (
          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            <button onClick={() => onEdit?.(p)}>Edit</button>
            <button onClick={() => onDelete?.(p._id)}>Delete</button>
          </div>
        ) : (
          <div style={{ marginTop: 8 }}>
            <button onClick={() => onBuyOne?.(p)}>Buy 1</button>
          </div>
        )}
      </div>
    </div>
  );
}