import { useState } from "react";
import Banner from "./components/Banner";
import ListGroup from "./components/ListGroup";
import Footer from "./components/Footer";
function App() {
  // state hook för att spåra om bilden är växlad
  const [switchImg, setSwitchImg] = useState(true);
  // bilder's Urls
  const imgUrlAdress = [
    "https://cdn.pixabay.com/photo/2024/02/18/13/13/ai-generated-8581189_1280.jpg",
    "https://cdn.pixabay.com/video/2021/08/10/84574-586228759_large.mp4",
  ];

  // funktion för att byta img i banner komponent
  const handleSwitch = () => {
    setSwitchImg(!switchImg);
  };

  // listor av animes
  const animeList = [
    {
      id: 1,
      title: "Attack on Titan",
      description:
        "En berättelse om mänsklighetens kamp för överlevnad mot gigantiska humanoider kallade titaner.",
      isWatch: true,
      imageURL:
        "https://c4.wallpaperflare.com/wallpaper/255/1016/62/attack-on-titans-shingeki-no-kyojin-mikasa-ackerman-eren-jeager-reiner-braun-hd-wallpaper-preview.jpg",
    },
    {
      id: 2,
      title: "My Hero Academia",
      description:
        "En ung pojke utan superkrafter i en värld full av superhjältar drömmer om att bli den största hjälten.",
      isWatch: false,
      imageURL:
        "https://c4.wallpaperflare.com/wallpaper/433/538/323/anime-my-hero-academia-izuku-midoriya-wallpaper-preview.jpg",
    },
    {
      id: 3,
      title: "Demon Slayer",
      description:
        "En ung pojke blir en demonjägare för att hämnas sin familj och rädda sin syster.",
      isWatch: true,
      imageURL:
        "https://c4.wallpaperflare.com/wallpaper/953/956/989/anime-demon-slayer-kimetsu-no-yaiba-giyuu-tomioka-inosuke-hashibira-nezuko-kamado-hd-wallpaper-preview.jpg",
    },
    {
      id: 4,
      title: "Death Note",
      description:
        "En gymnasieelev upptäcker en mystisk anteckningsbok som kan döda alla vars namn skrivs i den.",
      isWatch: true,
      imageURL:
        "https://c4.wallpaperflare.com/wallpaper/593/329/81/anime-death-note-l-death-note-light-yagami-wallpaper-preview.jpg",
    },
    {
      id: 5,
      title: "Fullmetal Alchemist: Brotherhood",
      description:
        "Två bröder söker efter De vises sten för att återställa sina kroppar efter ett misslyckat alkemiexperiment.",
      isWatch: false,
      imageURL:
        "https://c4.wallpaperflare.com/wallpaper/824/982/405/fullmetal-alchemist-fullmetal-alchemist-fullmetal-alchemist-brotherhood-wallpaper-preview.jpg",
    },
  ];

  // utvecklare namn
  const UtvecklareName = 'Mohamed Abokashef';

  return (
    <>
      <Banner
        title="Reactjs-Kmoment01"
        isClicked={switchImg} //  Passera switchImg som isClicked till banner component
        ImgUrl={switchImg ? imgUrlAdress[0] : imgUrlAdress[1]} // Växla mellan två bilder
        onSwitch={handleSwitch}
      />
      <ListGroup title={'Min AnimeList'} ListOfAnime={animeList} />
      <Footer Utvecklare={UtvecklareName}/>
    </>
  );
}

export default App;
