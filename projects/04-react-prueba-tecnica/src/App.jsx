
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";
import { Otro } from "./Components/Otro.jsx";

export function App() {
  const { fact, refreshRandomFact, firstWord } = useCatFact();
  const { imageUrl } = useCatImage({ fact, firstWord });

  useCatFact();

  const handleClick = async () => {
    refreshRandomFact();
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "system-ui",
        placeItems: "center",
      }}
    >
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new Fact</button>
      {fact && <p role="paragraph">{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="imagen de gato" />}

    </main>
    
  );
}
