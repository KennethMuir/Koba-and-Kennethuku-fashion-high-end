const stories = [
  {
    label: "01 / THE HOUSE",
    title: "A new language of luxury.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=90",
  },
  {
    label: "02 / THE DETAILS",
    title: "Why the smallest things matter.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1400&q=90",
  },
  {
    label: "03 / THE JOURNEY",
    title: "Objects made to travel with you.",
    image:
      "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="stories">
      <div className="section-intro stories-heading">
        <div>
          <p className="eyebrow dark">KOBA STORIES</p>

          <h2>
            The Journal.
          </h2>
        </div>

        <a href="#" className="underlined-link">
          VIEW ALL STORIES
        </a>
      </div>

      <div className="stories-grid">
        {stories.map((story) => (
          <article className="story" key={story.label}>
            <a href="#" className="story-image">
              <img src={story.image} alt={story.title} />
            </a>

            <div className="story-info">
              <p>{story.label}</p>
              <h3>{story.title}</h3>
              <a href="#" className="read-link">
                READ STORY
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
