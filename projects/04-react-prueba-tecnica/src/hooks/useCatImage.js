import { useEffect, useState } from "react";
import { getRandomImageFact } from "../services/imageFact.js";

export const useCatImage = ({ fact, firstWord }) => {
   const [imageUrl, setImageUrl] = useState();
    //Efecto para recuperar la imagen cuando cambie el fact
    useEffect(() => {
      if (!fact) return;
      getRandomImageFact(firstWord).then((newImageUrl) =>
        setImageUrl(newImageUrl)
      );
    }, [fact]);
  
    return { imageUrl };
};