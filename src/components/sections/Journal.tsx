const stories = [
  {
    category: "CRAFT",
    title: "The Art of Leather",
    image:
      "https://images.unsplash.com/photo-1612902456551-333ac5afa26e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "JOURNAL",
    title: "Inside the Atelier",
    image:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=1200&q=90",
  },
  {
    category: "PORTRAIT",
    title: "The KOBA Woman",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90",
  },
];

export default function Journal() {
  return (
    <section className="journal-section" id="journal">

      <div className="section-header">

        <div>
          <p className="eyebrow dark">THE JOURNAL</p>
          <h2>KOBA Stories</h2>
        </div>

        <a href="#" className="underlined-link">
          EXPLORE JOURNAL
        </a>

      </div>

      <div className="journal-grid">

        {stories.map((story) => (

          <article className="journal-card" key={story.title}>

            <a href="#">

              <div className="journal-image">
                <img src={story.image} alt={story.title} />
              </div>

              <div className="journal-info">
                <span>{story.category}</span>

                <h3>{story.title}</h3>

                <p>READ STORY →</p>
              </div>

            </a>

          </article>

        ))}

      </div>

    </section>
  );
}
