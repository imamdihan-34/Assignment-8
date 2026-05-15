"use client";

import Link from "next/link";
import animals from "./data/animals.json";

export default function Home() {
  const featured = animals.slice(0, 4);

  return (
    <main>
      {/* HERO SECTION */}

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK OVERLAY */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.35))",
          }}
        ></div>

        {/* HERO CONTENT */}

        <div className="container relative z-10 min-h-screen flex items-center">
          <div className="max-w-2xl text-white">
            <span className="badge badge-gold mb-6">
              Trusted Qurbani Marketplace
            </span>

            <h1
              className="font-bold leading-tight"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
              }}
            >
              Healthy Qurbani,
              <br />
              Blessed Eid
            </h1>

            <p
              className="mt-6 text-lg"
              style={{
                color: "rgba(255,255,255,0.85)",
                maxWidth: "650px",
              }}
            >
              Buy premium healthy livestock directly from trusted farms. Fresh,
              natural and fully vet-certified animals delivered safely to your
              doorstep.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/animals" className="btn-primary">
                Browse Animals
              </Link>

              <Link href="/register" className="btn-outline">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ANIMALS */}

      <section>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Featured Choices</h2>

            <div className="divider-gold"></div>

            <p className="section-subtitle">
              Carefully selected premium livestock for your special Qurbani
            </p>
          </div>

          <div className="animal-grid">
            {featured.map((item) => (
              <div key={item.id} className="custom-card">
                {/* IMAGE */}

                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      transition: "0.5s",
                    }}
                  />

                  {/* BADGE */}

                  <span
                    className="badge badge-gold"
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                    }}
                  >
                    Premium
                  </span>
                </div>

                {/* CONTENT */}

                <div className="card-content">
                  <div>
                    <h3 className="card-title-custom">{item.name}</h3>

                    <p
                      style={{
                        color: "var(--text-light)",
                        marginTop: "6px",
                        fontSize: "0.95rem",
                      }}
                    >
                      Healthy • Natural Feed • Farm Fresh
                    </p>

                    <p
                      className="price"
                      style={{
                        marginTop: "14px",
                      }}
                    >
                      ৳{item.price}
                    </p>
                  </div>

                  <Link
                  href={`/animals/${item.id}`}
                    className="btn-primary btn-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section>
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, #163020, #2d7a4f)",
              borderRadius: "32px",
              padding: "70px 40px",
              color: "white",
              boxShadow: "var(--shadow)",
            }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <span className="badge badge-gold mb-5">Why Choose Us</span>

              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: "700",
                }}
              >
                Trusted by Hundreds
                <br />
                Every Eid Season
              </h2>

              <p
                style={{
                  marginTop: "20px",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: "1.8",
                }}
              >
                We provide healthy animals, verified farms, quick delivery and
                complete customer satisfaction for your peaceful Qurbani.
              </p>
            </div>

            {/* FEATURES */}

            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                gap: "25px",
                marginTop: "60px",
              }}
            >
              {/* BOX 1 */}

              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "30px",
                  borderRadius: "24px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    marginBottom: "12px",
                  }}
                >
                  Vet Certified
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Every animal is health checked and verified before delivery.
                </p>
              </div>

              {/* BOX 2 */}

              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "30px",
                  borderRadius: "24px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    marginBottom: "12px",
                  }}
                >
                  Fast Delivery
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Quick and secure delivery directly to your location.
                </p>
              </div>

              {/* BOX 3 */}

              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "30px",
                  borderRadius: "24px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    marginBottom: "12px",
                  }}
                >
                  Natural Feeding
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Grass-fed and naturally raised livestock from trusted farms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
