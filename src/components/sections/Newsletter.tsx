export default function Newsletter() {
  return (
    <section className="newsletter">
      <p className="eyebrow dark">THE KOBA LETTER</p>

      <h2>
        Enter the world
        <br />
        of KOBA.
      </h2>

      <p>
        Be the first to discover new collections,
        private releases and stories from the house.
      </p>

      <form>
        <input
          type="email"
          placeholder="YOUR EMAIL ADDRESS"
          aria-label="Email address"
        />

        <button type="submit">
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
}
