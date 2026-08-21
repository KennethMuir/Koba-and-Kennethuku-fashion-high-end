"use client";

import Link from "next/link";
import { useState } from "react";

type Product = {
  name: string;
  category: string;
  price: string;
  image: string;
};

const women: Product[] = [
  {
    name: "Koba Atelier Mini",
    category: "Signature Collection",
    price: "KSh 24,500",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Koba Élan",
    category: "Leather Collection",
    price: "KSh 38,500",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Koba Maison",
    category: "Heritage Collection",
    price: "KSh 42,000",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Koba Lumière",
    category: "New Collection",
    price: "KSh 31,500",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85",
  },
];

const men: Product[] = [
  {
    name: "Koba No. 01",
    category: "Signature Collection",
    price: "KSh 29,500",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Koba Voyage",
    category: "Travel Collection",
    price: "KSh 45,000",
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Koba Homme",
    category: "Leather Collection",
    price: "KSh 39,500",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Koba Explorer",
    category: "Travel Collection",
    price: "KSh 52,000",
    image:
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Product[]>([]);

  /* =====================================================
     CHAT
     ===================================================== */

  const [chatOpen, setChatOpen] = useState(false);

  const allProducts = [...women, ...men];

  const addToCart = (product: Product) => {
    setCart((currentCart) => [...currentCart, product]);
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((currentCart) =>
      currentCart.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const searchResults = allProducts.filter((product) => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) {
      return true;
    }

    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  return (
    <main className="koba-site">

      {/* =====================================================
          ANNOUNCEMENT BAR
          ===================================================== */}

      <div className="koba-announcement">
        Complimentary delivery within Nairobi — Discover the new collection
      </div>


      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="koba-header">

        <div className="koba-header-inner">

          {/* =================================================
              LEFT SIDE
              ================================================= */}

          <div className="koba-header-left">

            {/* MOBILE MENU */}

            <button
              type="button"
              className="koba-menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>


            {/* DESKTOP NAVIGATION */}

            <nav
              className="koba-desktop-nav koba-nav-left"
              aria-label="Primary navigation"
            >
              <a href="#new">
                New In
              </a>

              <a href="#women">
                Women
              </a>

              <a href="#men">
                Men
              </a>
            </nav>

          </div>


          {/* =================================================
              CENTER LOGO
              ================================================= */}

          <Link
            href="/"
            className="koba-wordmark"
            aria-label="KOBA home"
          >
            KOBA
          </Link>


          {/* =================================================
              RIGHT SIDE
              ================================================= */}

          <div className="koba-header-right">

            {/* DESKTOP RIGHT NAVIGATION */}

            <nav
              className="koba-desktop-nav koba-nav-right"
              aria-label="Secondary navigation"
            >
              <a href="#collections">
                Collections
              </a>

              <a href="#about">
                The House
              </a>

              <a href="#contact">
                Contact
              </a>
            </nav>


            {/* =================================================
                HEADER ICONS
                ================================================= */}

            <div className="koba-header-icons">

              {/* SEARCH */}

              <button
                type="button"
                className="koba-search-button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                title="Search"
              >
                <span
                  className="koba-search-icon"
                  aria-hidden="true"
                />
              </button>


              {/* WISHLIST */}

              <Link
                href="/wishlist"
                className="koba-heart-button"
                aria-label="Open wishlist"
                title="Wishlist"
              >
                <span
                  className="koba-heart-icon"
                  aria-hidden="true"
                >
                  ♡
                </span>
              </Link>


              {/* SHOPPING BAG */}

              <button
                type="button"
                className="koba-cart-button"
                onClick={() => setCartOpen(true)}
                aria-label={`Open cart, ${cart.length} items`}
                title="Shopping bag"
              >
                <span
                  className="koba-cart-icon"
                  aria-hidden="true"
                >
                  <span className="koba-cart-handle" />
                  <span className="koba-cart-basket" />
                  <span className="koba-cart-wheel koba-cart-wheel-left" />
                  <span className="koba-cart-wheel koba-cart-wheel-right" />
                </span>

                {cart.length > 0 && (
                  <span className="koba-cart-count">
                    {cart.length}
                  </span>
                )}
              </button>

            </div>

          </div>

        </div>


        {/* =====================================================
            MOBILE MENU
            ===================================================== */}

        {menuOpen && (
          <div className="koba-mobile-menu open">

            <div className="koba-mobile-menu-header">

              <Link
                href="/"
                className="koba-mobile-logo"
                onClick={closeMobileMenu}
              >
                KOBA
              </Link>

              <button
                type="button"
                className="koba-close-button"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                Close
              </button>

            </div>


            <nav className="koba-mobile-navigation">

              <a
                href="#new"
                onClick={closeMobileMenu}
              >
                New In
              </a>

              <a
                href="#women"
                onClick={closeMobileMenu}
              >
                Women
              </a>

              <a
                href="#men"
                onClick={closeMobileMenu}
              >
                Men
              </a>

              <a
                href="#collections"
                onClick={closeMobileMenu}
              >
                Collections
              </a>

              <a
                href="#about"
                onClick={closeMobileMenu}
              >
                The House
              </a>

              <a
                href="#contact"
                onClick={closeMobileMenu}
              >
                Contact
              </a>

            </nav>


            {/* MOBILE ACTIONS */}

            <div className="koba-mobile-actions">

              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  setSearchOpen(true);
                }}
              >
                Search
              </button>


              <Link
                href="/wishlist"
                onClick={closeMobileMenu}
              >
                Wishlist
              </Link>


              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  setCartOpen(true);
                }}
              >
                Cart ({cart.length})
              </button>

            </div>

          </div>
        )}

      </header>


      {/* =====================================================
          SEARCH OVERLAY
          ===================================================== */}

      {searchOpen && (
        <div className="koba-search-overlay">

          <div className="koba-search-panel">

            <div className="koba-search-header">

              <span>
                Search KOBA
              </span>

              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                aria-label="Close search"
              >
                Close
              </button>

            </div>


            <div className="koba-search-input-wrapper">

              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search products, collections..."
                aria-label="Search products and collections"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}

            </div>


            <div className="koba-search-results">

              {searchResults.length === 0 ? (

                <p className="koba-search-empty">
                  No products found.
                </p>

              ) : (

                searchResults.map((product) => (

                  <button
                    type="button"
                    className="koba-search-result"
                    key={product.name}
                    onClick={() => {
                      addToCart(product);
                      setSearchOpen(false);
                    }}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div>

                      <strong>
                        {product.name}
                      </strong>

                      <span>
                        {product.category}
                      </span>

                      <small>
                        {product.price}
                      </small>

                    </div>

                  </button>

                ))

              )}

            </div>

          </div>

        </div>
      )}


      {/* =====================================================
          CART OVERLAY + DRAWER
          ===================================================== */}

      {cartOpen && (
        <>

          <div
            className="koba-cart-overlay"
            onClick={() => setCartOpen(false)}
          />


          <aside
            className="koba-cart-drawer"
            aria-label="Shopping cart"
          >

            <div className="koba-cart-header">

              <h2 className="koba-cart-title">
                Your Cart
              </h2>

              <button
                type="button"
                className="koba-cart-close"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                ×
              </button>

            </div>


            <div className="koba-cart-content">

              {cart.length === 0 ? (

                <div className="koba-cart-empty">

                  <p>
                    Your cart is currently empty.
                  </p>

                  <button
                    type="button"
                    className="koba-primary-button koba-cart-shop-button"
                    onClick={() => setCartOpen(false)}
                  >
                    Discover the collection
                  </button>

                </div>

              ) : (

                cart.map((product, index) => (

                  <div
                    className="koba-cart-item"
                    key={`${product.name}-${index}`}
                  >

                    <div className="koba-cart-item-image">

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                    </div>


                    <div className="koba-cart-item-info">

                      <h3>
                        {product.name}
                      </h3>

                      <p>
                        {product.category}
                      </p>

                      <span className="koba-cart-item-price">
                        {product.price}
                      </span>

                    </div>


                    <button
                      type="button"
                      className="koba-cart-remove"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>

                  </div>

                ))

              )}

            </div>


            {cart.length > 0 && (

              <div className="koba-cart-footer">

                <div className="koba-cart-total">

                  <span>
                    Items
                  </span>

                  <strong>
                    {cart.length}
                  </strong>

                </div>

                <button
                  type="button"
                  className="koba-cart-checkout"
                >
                  Proceed to Checkout
                </button>

              </div>

            )}

          </aside>

        </>
      )}


      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="koba-hero"
        id="new"
      >

        <div className="koba-hero-image">

          <img
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=2200&q=90"
            alt="Koba luxury collection"
          />

        </div>


        <div className="koba-hero-overlay" />


        <div className="koba-hero-content">

          <p className="koba-overline">
            KOBA — NEW COLLECTION
          </p>

          <h1>
            Made for
            <br />
            <em>
              the journey.
            </em>
          </h1>

          <p className="koba-hero-copy">
            Contemporary objects shaped by African perspective,
            exceptional materials and considered craftsmanship.
          </p>

          <a
            href="#collections"
            className="koba-primary-button"
          >
            Discover the collection
          </a>

        </div>


        <div className="koba-scroll">

          <span>
            Scroll to explore
          </span>

          <i />

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
          ===================================================== */}

      <section
        className="koba-introduction"
        id="about"
      >

        <div className="koba-intro-small">

          <span>
            01
          </span>

          <span>
            THE HOUSE OF KOBA
          </span>

        </div>


        <div className="koba-intro-main">

          <h2>
            Objects with
            <br />
            <em>
              meaning.
            </em>
          </h2>

          <p>
            KOBA creates timeless pieces for people who move
            with intention. Our collections bring together
            modern African design, refined materials and
            functional elegance.
          </p>

          <a
            href="#about-house"
            className="koba-text-link"
          >
            Discover KOBA
            <span>
              →
            </span>
          </a>

        </div>

      </section>


      {/* =====================================================
          COLLECTIONS
          ===================================================== */}

      <section
        className="koba-collection-section"
        id="collections"
      >

        <div className="koba-section-heading">

          <div>

            <p className="koba-overline dark">
              THE COLLECTION
            </p>

            <h2>
              Explore KOBA
            </h2>

          </div>

          <a
            href="#women"
            className="koba-text-link"
          >
            View all
            <span>
              →
            </span>
          </a>

        </div>


        <div className="koba-category-grid">

          <a
            href="#women"
            className="koba-category"
          >

            <img
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1400&q=85"
              alt="Women's collection"
            />

            <div className="koba-category-caption">

              <span>
                01
              </span>

              <h3>
                For Her
              </h3>

              <p>
                Explore women's collection
              </p>

            </div>

          </a>


          <a
            href="#men"
            className="koba-category"
          >

            <img
              src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=1400&q=85"
              alt="Men's collection"
            />

            <div className="koba-category-caption">

              <span>
                02
              </span>

              <h3>
                For Him
              </h3>

              <p>
                Explore men's collection
              </p>

            </div>

          </a>

        </div>

      </section>


      {/* =====================================================
          WOMEN
          ===================================================== */}

      <section
        className="koba-products"
        id="women"
      >

        <div className="koba-products-heading">

          <div>

            <p className="koba-overline dark">
              FOR HER
            </p>

            <h2>
              Women's collection
            </h2>

          </div>

          <a
            href="#women"
            className="koba-text-link"
          >
            Discover more
            <span>
              →
            </span>
          </a>

        </div>


        <div className="koba-product-grid">

          {women.map((product, index) => (

            <article
              className="koba-product"
              key={product.name}
            >

              <div className="koba-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                {index === 0 && (
                  <span className="koba-product-badge">
                    New
                  </span>
                )}

                <button
                  type="button"
                  className="koba-favourite"
                  aria-label={`Add ${product.name} to favourites`}
                >
                  ♡
                </button>

              </div>


              <div className="koba-product-info">

                <div>

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.category}
                  </p>

                </div>

                <strong>
                  {product.price}
                </strong>

              </div>


              <button
                type="button"
                className="koba-add-product"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          EDITORIAL
          ===================================================== */}

      <section className="koba-editorial">

        <div className="koba-editorial-image">

          <img
            src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=1800&q=90"
            alt="Koba travel collection"
          />

        </div>


        <div className="koba-editorial-content">

          <p className="koba-overline">
            KOBA TRAVEL
          </p>

          <h2>
            Carry
            <br />
            <em>
              your story.
            </em>
          </h2>

          <p>
            Designed for movement. Built for everyday life.
            Discover pieces created to accompany you from the
            city to wherever the road leads.
          </p>

          <a
            href="#men"
            className="koba-primary-button light"
          >
            Explore travel
          </a>

        </div>

      </section>


      {/* =====================================================
          MEN
          ===================================================== */}

      <section
        className="koba-products"
        id="men"
      >

        <div className="koba-products-heading">

          <div>

            <p className="koba-overline dark">
              FOR HIM
            </p>

            <h2>
              Men's collection
            </h2>

          </div>

          <a
            href="#men"
            className="koba-text-link"
          >
            Discover more
            <span>
              →
            </span>
          </a>

        </div>


        <div className="koba-product-grid">

          {men.map((product, index) => (

            <article
              className="koba-product"
              key={product.name}
            >

              <div className="koba-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                {index === 0 && (
                  <span className="koba-product-badge">
                    New
                  </span>
                )}

                <button
                  type="button"
                  className="koba-favourite"
                  aria-label={`Add ${product.name} to favourites`}
                >
                  ♡
                </button>

              </div>


              <div className="koba-product-info">

                <div>

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.category}
                  </p>

                </div>

                <strong>
                  {product.price}
                </strong>

              </div>


              <button
                type="button"
                className="koba-add-product"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          CRAFTSMANSHIP
          ===================================================== */}

      <section
        className="koba-craft"
        id="about-house"
      >

        <div className="koba-craft-number">
          03
        </div>


        <div className="koba-craft-content">

          <p className="koba-overline dark">
            THE KOBA STANDARD
          </p>

          <h2>
            Designed
            <br />
            <em>
              with intention.
            </em>
          </h2>

          <p>
            We believe luxury is not simply what an object costs.
            It is the thought behind it, the quality of its
            materials, the precision of its construction and
            the story it carries.
          </p>


          <div className="koba-values">

            <div>

              <span>
                01
              </span>

              <strong>
                Craft
              </strong>

              <p>
                Thoughtful construction and lasting materials.
              </p>

            </div>


            <div>

              <span>
                02
              </span>

              <strong>
                Purpose
              </strong>

              <p>
                Beautiful objects designed for real life.
              </p>

            </div>


            <div>

              <span>
                03
              </span>

              <strong>
                Perspective
              </strong>

              <p>
                A distinctly African point of view.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
          ===================================================== */}

      <section className="koba-newsletter">

        <p className="koba-overline dark">
          THE KOBA JOURNAL
        </p>

        <h2>
          Stay in
          <br />
          <em>
            the know.
          </em>
        </h2>

        <p>
          Be the first to discover new collections, stories
          and special releases from KOBA.
        </p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >

          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer
        className="koba-footer"
        id="contact"
      >

        <div className="koba-footer-top">

          <div className="koba-footer-brand">

            <Link
              href="/"
              className="koba-wordmark footer-logo"
            >
              KOBA
            </Link>

            <p>
              Objects for the journey.
              <br />
              Designed in Africa.
            </p>

          </div>


          <div>

            <h4>
              Explore
            </h4>

            <a href="#new">
              New In
            </a>

            <a href="#women">
              Women
            </a>

            <a href="#men">
              Men
            </a>

            <a href="#collections">
              Collections
            </a>

          </div>


          <div>

            <h4>
              About
            </h4>

            <a href="#about">
              The House
            </a>

            <a href="#about-house">
              Craftsmanship
            </a>

            <a href="#contact">
              Journal
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          <div>

            <h4>
              Client Services
            </h4>

            <a href="#delivery">
              Delivery
            </a>

            <a href="#returns">
              Returns
            </a>

            <a href="#care">
              Product Care
            </a>

            <a href="#help">
              Help
            </a>

          </div>

        </div>


        <div className="koba-footer-bottom">

          <span>
            © 2026 KOBA. All rights reserved.
          </span>

          <div>

            <a href="#instagram">
              Instagram
            </a>

            <a href="#privacy">
              Privacy
            </a>

            <a href="#terms">
              Terms
            </a>

          </div>

        </div>

      </footer>


      {/* =====================================================
          CHAT WITH US
          ===================================================== */}

      <div className="koba-chat-widget">

        {chatOpen && (
          <div className="koba-chat-panel">

            <div className="koba-chat-panel-header">

              <div>
                <strong>
                  KOBA Client Services
                </strong>

                <span>
                  We are here to help
                </span>
              </div>

              <button
                type="button"
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>

            </div>


            <div className="koba-chat-panel-content">

              <div className="koba-chat-message">
                Hello. Welcome to KOBA.
                <br />
                How may we assist you today?
              </div>

              <button
                type="button"
                className="koba-chat-option"
              >
                Help me find a product
              </button>

              <button
                type="button"
                className="koba-chat-option"
              >
                Delivery & returns
              </button>

              <button
                type="button"
                className="koba-chat-option"
              >
                Speak to client services
              </button>

            </div>


            <div className="koba-chat-panel-footer">
              KOBA Client Services
            </div>

          </div>
        )}


        <button
          type="button"
          className="koba-chat-bubble"
          onClick={() => setChatOpen((current) => !current)}
          aria-label={chatOpen ? "Close chat" : "Chat with us"}
          aria-expanded={chatOpen}
        >
          <span className="koba-chat-icon">
            💬
          </span>

          <span className="koba-chat-label">
            Chat with us
          </span>
        </button>

      </div>

    </main>
  );
}