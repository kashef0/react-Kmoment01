import "./Banner.css";

// egenskaperna för banner komponenet
interface Props {
  title: string;
  isClicked: boolean;
  ImgUrl?: string;
  // En funktion som anropas när användaren klickar på
  onSwitch: () => void;
}

const Banner = ({ title, ImgUrl, onSwitch, isClicked }: Props) => {
  return (
    <header>
      <div className="header-container">
        <div className="head-rubrik">
          <h1>{title}</h1>
        </div>
        <div className={`banner-imag`}>
          {isClicked ? <img src={ImgUrl} alt={ImgUrl} /> : <video src={ImgUrl} className="video-banner clear" autoPlay loop muted></video> }
          {/* <img className={isClicked ? 'fade-in' : 'fade-out'} src={ImgUrl} alt={ImgUrl} /> */}
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
