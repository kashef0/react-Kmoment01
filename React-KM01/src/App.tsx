import { useState } from "react";
import Banner from "./components/Banner";

function App() {
  // state hook to byta bakgrund imag banner component
  const [switchImg, setSwitchImg] = useState(true);
  const imgUrlAdress = [
    "https://cdn.pixabay.com/photo/2024/02/18/13/13/ai-generated-8581189_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/09/08/07/ai-generated-8750167_1280.jpg",
  ];

  const animeList = [
    {
      id: 1,
      title: "Attack on Titan",
      description:
        "A story about humanity's struggle for survival against giant humanoid creatures called Titans.",
      isWatch: true,
    },
    {
      id: 2,
      title: "My Hero Academia",
      description:
        "A young boy without powers in a superpowered world dreams of becoming the greatest hero.",
      isWatch: false,
    },
    {
      id: 3,
      title: "Demon Slayer",
      description:
        "A young boy becomes a demon slayer to avenge his family and save his sister.",
      isWatch: true,
    },
    {
      id: 4,
      title: "Death Note",
      description:
        "A high school student discovers a mysterious notebook that can kill anyone whose name is written in it.",
      isWatch: true,
    },
    {
      id: 5,
      title: "Fullmetal Alchemist: Brotherhood",
      description:
        "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemy experiment.",
      isWatch: false,
    },
  ];

  return (
    <>
      <Banner
        ImgUrl={switchImg ? imgUrlAdress[0] : imgUrlAdress[1]}
        onSwitch={() => {
          setSwitchImg(!switchImg);
        }}
      />
    </>
  );
}

export default App;
