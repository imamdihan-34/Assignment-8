import Link from "next/link";
import { FaMapMarkerAlt, FaWeight, FaBirthdayCake } from "react-icons/fa";
 
export default function AnimalCard({ animal }) {
  return (
    <div
      className="card-hover"
      style={{
        background: "white",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(26,74,46,0.08)",
        border: "1px solid #e8ddc4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
        <img
          src={animal.image}
          alt={animal.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}>
          <span className="badge badge-green">{animal.type}</span>
        </div>
        <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem" }}>
          <span className="badge badge-gold">{animal.category}</span>
        </div>
      </div>
 
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ color: "#1a4a2e", fontWeight: "700", fontSize: "1.05rem", marginBottom: "0.25rem" }}>
          {animal.name}
        </h3>
        <p style={{ color: "#8a8a8a", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
          {animal.breed}
        </p>
 
        <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#4a4a4a", fontSize: "0.82rem" }}>
            <FaWeight style={{ color: "#c9972a" }} /> {animal.weight} kg
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#4a4a4a", fontSize: "0.82rem" }}>
            <FaBirthdayCake style={{ color: "#c9972a" }} /> {animal.age} yrs
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#4a4a4a", fontSize: "0.82rem" }}>
            <FaMapMarkerAlt style={{ color: "#c9972a" }} /> {animal.location}
          </div>
        </div>
 
        <p style={{ color: "#6a6a6a", fontSize: "0.85rem", lineHeight: "1.6", marginBottom: "1rem", flex: 1 }}>
          {animal.description.slice(0, 90)}...
        </p>
 
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
          <div>
            <div style={{ color: "#8a8a8a", fontSize: "0.75rem" }}>Price</div>
            <div style={{ color: "#1a4a2e", fontWeight: "700", fontSize: "1.15rem" }}>
              ৳{animal.price.toLocaleString()}
            </div>
          </div>
          <Link
            href={`/animals/${animal.id}`}
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.5rem 1.1rem" }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}