import "./Banner.css";

interface Props {
  ImgUrl?: string;
  onSwitch: () => void
}

const Banner = ({ ImgUrl, onSwitch }: Props) => {
  return (
    <header>
      <div className="head-rubrik">
        <h1>fritidsintresse</h1>
      </div>
      <div className="banner-imag">
        <img src={ImgUrl} alt={ImgUrl} />
        <div className="banner-text">
          <h1>fritidsintresse</h1>
          <p>fritidsintresse</p>
          <button onClick={onSwitch}>Byt Img</button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
