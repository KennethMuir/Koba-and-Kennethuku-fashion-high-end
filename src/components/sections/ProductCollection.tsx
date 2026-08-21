"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export default function ProductCollection() {
  return (
    <section className="collection-section" id="collections">

      <div className="section-header">

        <div>
          <p className="eyebrow dark">THE COLLECTION</p>
          <h2>Signature Forms</h2>
        </div>

        <a href="#" className="underlined-link">
          VIEW ALL
        </a>

      </div>

      <div className="product-grid">

        {products.slice(0, 3).map((product, index) => (

          <motion.article
            className="product-card"
            key={product.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.75,
              delay: index * 0.12,
            }}
          >

            <a href="#">

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className="product-heart"
                  aria-label={`Add ${product.name} to wishlist`}
                  onClick={(event) => event.preventDefault()}
                >
                  <Heart size={19} strokeWidth={1.2} />
                </button>

                <span className="quick-view">
                  QUICK VIEW
                  <ArrowUpRight size={13} strokeWidth={1.2} />
                </span>

              </div>

              <div className="product-details">

                <div>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>

                <span>{product.price}</span>

              </div>

            </a>

          </motion.article>

        ))}

      </div>

    </section>
  );
}
