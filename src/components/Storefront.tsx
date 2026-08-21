"use client";

import { useState } from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

export default function Storefront({ products }: { products: Product[] }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addToCart(product: Product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  }

  function removeFromCart(id: number) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function changeQuantity(id: number, amount: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="koba-storefront">
      <header className="koba-header">
        <div className="koba-header-inner">
          <button className="mobile-menu" aria-label="Open menu">
            <span />
            <span />
          </button>

          <a href="/" className="koba-logo">
            KOBA
          </a>

          <nav className="koba-navigation">
            <a href="#new">New Arrivals</a>
            <a href="#bags">Bags</a>
            <a href="#accessories">Accessories</a>
            <a href="#collection">Collection</a>
          </nav>

          <div className="koba-header-actions">
            <button className="header-action" aria-label="Search">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16l5 5" />
              </svg>
            </button>

            <button className="header-action" aria-label="Account">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20c.8-3.5 3.1-5.5 7-5.5s6.2 2 7 5.5" />
              </svg>
            </button>

            <button
              className="cart-button"
              aria-label={`Shopping bag with ${cartCount} items`}
              onClick={() => setCartOpen(true)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 8.5h14l-1 12H6l-1-12Z" />
                <path d="M9 9V6a3 3 0 0 1 6 0v3" />
              </svg>

              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="koba-hero" id="new">
          <div className="hero-content">
            <p className="eyebrow">THE NEW COLLECTION</p>
            <h1>Objects of<br />quiet distinction.</h1>
            <p className="hero-copy">
              Considered pieces designed for movement, presence and everyday
              luxury.
            </p>
            <a href="#collection" className="hero-link">
              Discover the collection
              <span>→</span>
            </a>
          </div>
        </section>

        <section className="collection-section" id="collection">
          <div className="collection-heading">
            <div>
              <p className="eyebrow">KOBA COLLECTION</p>
              <h2>Signature pieces</h2>
            </div>

            <p className="collection-description">
              A curated selection of contemporary pieces defined by material,
              proportion and restraint.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <button
                    className="quick-add"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="product-information">
                  <div>
                    <p className="product-category">{product.category}</p>
                    <h3>{product.name}</h3>
                  </div>

                  <p className="product-price">
                    {formatPrice(product.price)}
                  </p>
                </div>

                <div className="product-actions">
                  <button
                    className="add-button"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="buy-button"
                    onClick={() => {
                      addToCart(product);
                      setCartOpen(true);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {cartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="cart-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cart-header">
              <div>
                <p className="eyebrow">YOUR SELECTION</p>
                <h2>Shopping Bag</h2>
              </div>

              <button
                className="cart-close"
                onClick={() => setCartOpen(false)}
                aria-label="Close shopping bag"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your shopping bag is currently empty.</p>
                <button onClick={() => setCartOpen(false)}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div className="cart-item-info">
                        <p className="product-category">{item.category}</p>
                        <h3>{item.name}</h3>
                        <p>{formatPrice(item.price)}</p>

                        <div className="quantity-row">
                          <button
                            onClick={() => changeQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() => changeQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>

                          <button
                            className="remove-item"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total</span>
                    <strong>{formatPrice(cartTotal)}</strong>
                  </div>

                  <button className="checkout-button">
                    Proceed to Checkout
                  </button>

                  <p className="checkout-note">
                    Shipping and taxes calculated at checkout.
                  </p>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
