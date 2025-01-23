import "./ListGroup.css";

// egenskaperna för en anime
interface Props {
  id: number;
  title: string;
  description: string;
  isWatch: boolean;
  imageURL: string;
}
// en lista med anime-objekt
interface ListAnime {
  //En array med anime objekt
  ListOfAnime: Props[];
  title: string
}

const ListGroup = ({ title, ListOfAnime }: ListAnime) => {
  return (
    <main>
      <div className="body-rubrik">
        <h1>{title}</h1>
      </div>
      <div className="flip-card-container">
      {/* Mappa över ListOfAnime och rendera varje item som ett listobjekt */}
        {ListOfAnime.map((anime) => (
          <div className="flip-card" key={anime.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={anime.imageURL} alt={anime.imageURL} />
              </div>
              <div className="flip-card-back">
                <h1>{anime.title}</h1>
                <p>
                  <strong className="description">Beskrivning: </strong> 
                  {anime.description}
                </p>
                <p>
                  status:{" "}
                  {/* kontrollera om isWatch true eller false */}
                  {anime.isWatch ? (
                    <del className="watched"> Sedd ✓</del>
                  ) : (
                    <strong className="not-watched"> Inte sedd ✗</strong>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ListGroup;
