"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <header className="site-header">

        {/* LEFT — MENU */}
        <div className="header-left">
          <button
            type="button"
            className="menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
          </button>
        </div>

        {/* CENTER — KOBA */}
        <a href="/" className="koba-logo">
          KOBA
        </a>

        {/* RIGHT — NAVIGATION + ACTIONS */}
        <div className="header-right">

          <nav className="desktop-nav">
            <a href="#collections">COLLECTIONS</a>
            <a href="#house">THE HOUSE</a>
            <a href="#contact">CONTACTS</a>
          </nav>

          {/* SEARCH */}
          <button
            type="button"
            className="koba-search-button"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            <span className="koba-search-icon" />
          </button>

          {/* HEART / WISHLIST */}
          <button
            type="button"
            className="koba-heart-button"
            aria-label="Open wishlist"
          >
            <span className="koba-heart-icon">♡</span>
          </button>

          {/* CART */}
          <button
            type="button"
            className="koba-cart-button"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open cart, ${cartCount} items`}
          >
            <span className="koba-cart-icon">
              <span className="koba-cart-handle" />
              <span className="koba-cart-basket" />
              <span className="koba-cart-wheel koba-cart-wheel-left" />
              <span className="koba-cart-wheel koba-cart-wheel-right" />
            </span>

            {cartCount > 0 && (
              <span className="koba-cart-count">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu-panel">

          <div className="mobile-menu-header">

            <a
              href="/"
              className="mobile-logo"
              onClick={() => setOpen(false)}
            >
              KOBA
            </a>

            <button
              type="button"
              className="close-button"
              onClick={() => setOpen(false)}
            >
              CLOSE
            </button>

          </div>

          <nav className="mobile-navigation">

            <a
              href="#collections"
              onClick={() => setOpen(false)}
            >
              COLLECTIONS
            </a>

            <a
              href="#house"
              onClick={() => setOpen(false)}
            >
              THE HOUSE
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
            >
              CONTACTS
            </a>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setIsSearchOpen(true);
              }}
            >
              SEARCH
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setIsCartOpen(true);
              }}
            >
              CART ({cartCount})
            </button>

          </nav>
        </div>
      )}

      {/* SEARCH */}
      {isSearchOpen && (
        <div
          className="koba-search-overlay"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="koba-search-panel"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="koba-search-header">

              <span className="koba-search-title">
                SEARCH
              </span>

              <button
                type="button"
                className="koba-search-close"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
              >
                CLOSE
              </button>

            </div>

            <div className="koba-search-form">

              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                autoFocus
              />

              <button type="button">
                SEARCH
              </button>

            </div>

          </div>
        </div>
      )}

      {/* CART */}
      {isCartOpen && (
        <div
          className="koba-cart-overlay"
          onClick={() => setIsCartOpen(false)}
        >
          <aside
            className="koba-cart-panel"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="koba-cart-header">

              <span className="koba-cart-title">
                CART ({cartCount})
              </span>

              <button
                type="button"
                className="koba-cart-close"
                onClick={() => setIsCartOpen(false)}
              >
                CLOSE
              </button>

            </div>

            <div className="koba-cart-empty">

              <p>YOUR CART IS EMPTY</p>

              <button
                type="button"
                className="koba-cart-shopping-button"
                onClick={() => {
                  setIsCartOpen(false);
                  window.location.href = "#collections";
                }}
              >
                CONTINUE SHOPPING
              </button>

            </div>

          </aside>
        </div>
      )}
    </>
  );
}