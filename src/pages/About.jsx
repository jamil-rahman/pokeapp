// Prince Lawrence John Castelino
import '../css/about.css';

export default function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>The Pokemon Company</h1>
        <p className="tagline">Gotta Catch 'Em All!</p>
      </header>

      <section className="about-section">
        <h2>Our Journey</h2>
        <div className="content-block">
          <p>Founded in 1996 by Satoshi Tajiri, Pokemon began with a simple idea inspired by Tajiri's childhood hobby of insect collecting. This concept evolved into the globally renowned franchise we know today, starting with the release of Pokemon Red and Green in Japan.</p>
          <div className="stat-block">
            <div className="stat">
              <h3>27+</h3>
              <p>Years of Adventure</p>
            </div>
            <div className="stat">
              <h3>1000+</h3>
              <p>Pokemon Created</p>
            </div>
            <div className="stat">
              <h3>$100B+</h3>
              <p>Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Global Impact</h2>
        <div className="content-block">
          <div className="impact-grid">
            <div className="impact-card">
              <h3>Gaming Excellence</h3>
              <p>Over 380 million games sold worldwide, making it one of the most successful gaming franchises in history.</p>
            </div>
            <div className="impact-card">
              <h3>Entertainment Empire</h3>
              <p>The animated series has aired in more than 160 countries and regions, with over 1000 episodes produced.</p>
            </div>
            <div className="impact-card">
              <h3>Trading Card Game</h3>
              <p>Over 43.2 billion cards sold globally, fostering a competitive scene and collector's market.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Innovation & Future</h2>
        <div className="content-block">
          <p>Today, Pokemon continues to evolve with breakthrough titles like Pokemon GO, which revolutionized mobile gaming, and the expansion into new territories with games like Pokemon Legends: Arceus. Our commitment to innovation while maintaining the core values of friendship, adventure, and discovery remains unchanged.</p>
        </div>
      </section>
    </div>
  );
}