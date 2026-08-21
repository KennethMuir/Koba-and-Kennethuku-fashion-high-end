const products = [
  {
    name: "The Koba One",
    category: "Signature Shoulder Bag",
    price: "KSh 48,000",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "The Mwezi",
    category: "Structured Handbag",
    price: "KSh 56,000",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "The Nia",
    category: "Leather Tote",
    price: "KSh 62,000",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="collection">
      <div className="section-intro">
        <div>
          <p className="eyebrow dark">THE COLLECTION</p>

          <h2>
            Icons
            <br />
            of KOBA.
          </h2>
        </div>

        <div className="section-description">
          <p>
            Designed with restraint. Defined by character.
            Every KOBA piece is created to become part of
            the life of the person carrying it.
          </p>

          <a href="#all-products" className="underlined-link">
            VIEW ALL PIECES
          </a>
        </div>
      </div>

      <div className="products">
        {products.map((product, index) => (
          <article className="product" key={product.name}>
            <a href="#" className="product-image">
              <img src={product.image} alt={product.name} />

              <span className="product-number">
                0{index + 1}
              </span>

              <span className="quick-view">
                QUICK VIEW
              </span>
            </a>

            <div className="product-info">
              <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>

              <span>{product.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
