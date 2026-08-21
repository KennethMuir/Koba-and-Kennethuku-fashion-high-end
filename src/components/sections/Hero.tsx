export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image" />

      <div className="hero-shade" />

      <div className="hero-content">
        <p className="eyebrow">THE NEW COLLECTION</p>

        <h1>
          Carry
          <br />
          Your
          <br />
          Story.
        </h1>

        <p className="hero-copy">
          Distinctive leather goods designed for a life
          <br className="desktop-break" />
          lived with intention.
        </p>

        <a href="#collection" className="hero-button">
          DISCOVER THE COLLECTION
        </a>
      </div>

      <div className="hero-meta">
        <span>KOBA / 01</span>
        <span>2026 COLLECTION</span>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
