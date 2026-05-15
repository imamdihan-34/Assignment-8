"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import animals from "../../data/animals.json";

export default function AnimalDetails() {
  const params = useParams();

  const animal = animals.find((item) => item.id === parseInt(params.id));

  if (!animal) {
    return (
      <section className="container">
        <div
          style={{
            padding: "120px 0",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
            }}
          >
            Animal Not Found
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >

          <div className="custom-card">
            <img src={animal.image} alt={animal.name} />
          </div>



          <div>
            <span className="badge badge-gold mb-5">Premium Livestock</span>

            <h1
              style={{
                fontSize: "clamp(2.5rem,5vw,4rem)",
                fontWeight: "700",
                color: "var(--green-deep)",
              }}
            >
              {animal.name}
            </h1>

            <p
              className="price"
              style={{
                marginTop: "18px",
                fontSize: "2rem",
              }}
            >
              ৳{animal.price}
            </p>

            <div
              style={{
                marginTop: "35px",
                display: "grid",
                gap: "18px",
              }}
            >
              <div
                className="custom-card"
                style={{
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Breed
                </h3>

                <p>{animal.breed}</p>
              </div>

              <div
                className="custom-card"
                style={{
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Weight
                </h3>

                <p>{animal.weight} KG</p>
              </div>

              <div
                className="custom-card"
                style={{
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Health Status
                </h3>

                <p>Vet Certified & Healthy</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >
              <button className="btn-primary">Order Now</button>

              <Link
                href="/animals"
                className="btn-outline"
                style={{
                  borderColor: "var(--green-deep)",
                  color: "var(--green-deep)",
                }}
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
