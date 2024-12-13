// Nithish Vinolin Stephen 
import '../css/media.css';
const publicUrl = import.meta.env.BASE_URL;

export default function Media() {
  const mediaContent = {
    anime: [
      {
        title: "Pokemon: Indigo League",
        description: "The original series following Ash Ketchum's journey",
        year: "1997",
        image: `${publicUrl}indigo.jpg`
      }
    ],
    movies: [
      {
        title: "Pokemon: The First Movie",
        description: "Mewtwo's origin story and clash with the original Pokemon",
        year: "1998",
        image: `${publicUrl}first_movie.jpg`
      }
    ],
    games: [
      {
        title: "Pokemon Red and Blue",
        description: "The original Pokemon games that started it all",
        year: "1996",
        image: `${publicUrl}red_blue.jpeg`
      }
    ]
  };

  return (
    <div className="media-page">
      <h1>Pokemon Media</h1>
      
      {Object.entries(mediaContent).map(([category, items]) => (
        <section key={category} className="media-section">
          <h2>{category.toUpperCase()}</h2>
          <div className="media-grid">
            {items.map((item, index) => (
              <div key={index} className="media-card">
                <div className="media-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="media-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="year">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}