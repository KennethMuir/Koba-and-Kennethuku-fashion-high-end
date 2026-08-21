export default function PrivateClient() {
  return (
    <section id="private" className="private-client">
      <div className="private-image">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2200&q=90"
          alt="KOBA private client"
        />
      </div>

      <div className="private-shade" />

      <div className="private-content">
        <p className="eyebrow">PRIVATE CLIENT</p>

        <h2>
          A private
          <br />
          world.
        </h2>

        <p>
          Discover private appointments, limited pieces
          and a more personal expression of KOBA.
        </p>

        <a href="#" className="hero-button">
          REQUEST AN APPOINTMENT
        </a>
      </div>
    </section>
  );
}
