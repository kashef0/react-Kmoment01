import "./Banner.css";

interface Props {
  title: string;
  isClicked: boolean;
  ImgUrl?: string;
  onSwitch: () => void;
}

const Banner = ({ title, ImgUrl, onSwitch, isClicked }: Props) => {
  return (
    <header>
      <div className="header-container">
        <div className="head-rubrik">
          <h1>{title}</h1>
        </div>
        <div className={`banner-imag ${isClicked ? "active" : ""}`}>
          <img src={ImgUrl} alt={ImgUrl} />
          <div className="banner-text">
            <h1>fritidsintresse</h1>
            <p>Här kan du hitta de mest kända animes</p>
            <button onClick={onSwitch}>Byt Img</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
