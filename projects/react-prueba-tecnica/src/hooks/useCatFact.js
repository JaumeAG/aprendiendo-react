import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts.js";

export function useCatFact() {
  const [fact, setFact] = useState();
  const [firstWord, setFirstWord] = useState();

  const refreshRandomFact = () => {
    getRandomFact().then((newFact) => {
      setFact(newFact);
      const firstWord = newFact.split(" ", 3).join(" ");
      setFirstWord(firstWord);
    });

    //Efecto para recuperar el fact
    useEffect(refreshRandomFact, []);
  };

  return { fact, firstWord, refreshRandomFact };
};