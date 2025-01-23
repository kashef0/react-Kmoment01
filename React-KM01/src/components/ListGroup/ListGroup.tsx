import "./ListGroup.css";

interface Props {
  id: number;
  title: string;
  description: string;
  isWatch: boolean;
  imageURL: string;
}

interface ListAnime {
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
        {ListOfAnime.map((anime) => (
          <div className="flip-card" key={anime.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={anime.imageURL} alt={anime.imageURL} />
              </div>
              <div className="flip-card-back">
                <h1>{anime.title}</h1>
                <p>
                  <strong className="description">Beskrivning: </strong>{" "}
                  {anime.description}
                </p>
                <p>
                  status:{" "}
                  {anime.isWatch ? (
                    <del className="watched">sett ✓</del>
                  ) : (
                    <strong className="not-watched">inte sett ✗</strong>
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
