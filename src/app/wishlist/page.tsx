"use client";

import Link from "next/link";

export default function WishlistPage() {
  return (
    <main className="koba-wishlist-page">

      {/* HEADER */}

      <header className="koba-wishlist-header">

        <Link
          href="/"
          className="koba-wishlist-logo"
        >
          KOBA
        </Link>

        <Link
          href="/"
          className="koba-wishlist-back"
        >
          Continue Shopping
        </Link>

      </header>


      {/* WISHLIST CONTENT */}

      <section className="koba-wishlist-content">

        <div className="koba-wishlist-icon">

          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>

        </div>


        <p className="koba-wishlist-overline">
          YOUR WISHLIST
        </p>


        <h1>
          Your wishlist is empty!
        </h1>


        <p className="koba-wishlist-description">
          Add your favourite items and share them.
        </p>


        <div className="koba-wishlist-inspiration">

          <h2>
            Need inspiration?
          </h2>

          <Link
            href="/"
            className="koba-wishlist-button"
          >
            Discover the collection
          </Link>

        </div>


        <Link
          href="/login"
          className="koba-wishlist-signin"
        >
          Sign In
        </Link>

      </section>


      {/* RECENTLY VIEWED */}

      <section className="koba-recently-viewed">

        <div className="koba-recently-heading">

          <span>
            Recently Viewed
          </span>

        </div>


        <div className="koba-recently-line" />


        <div className="koba-recently-grid">

          <Link
            href="/"
            className="koba-recently-product"
          >

            <div className="koba-recently-image">

              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85"
                alt="Koba Atelier Mini"
              />

            </div>

            <div className="koba-recently-info">

              <h3>
                Koba Atelier Mini
              </h3>

              <p>
                Signature Collection
              </p>

              <strong>
                KSh 24,500
              </strong>

            </div>

          </Link>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="koba-wishlist-footer">

        <span>
          © 2026 KOBA. All rights reserved.
        </span>

        <div>

          <Link href="/">
            Home
          </Link>

          <Link href="/privacy">
            Privacy
          </Link>

          <Link href="/terms">
            Terms
          </Link>

        </div>

      </footer>

    </main>
  );
}