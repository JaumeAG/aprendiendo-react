import {useCatImage } from "../hooks/useCatImage.js";
export function Otro() {
    const {imageUrl} = useCatImage({fact: 'esto es una prueba', firstWord: 'esto es'});
  return (
    <>
    {imageUrl && <img src={imageUrl} alt="imagen de gato" />}
    </>
  );
}