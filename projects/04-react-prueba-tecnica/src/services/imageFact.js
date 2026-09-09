

export const getRandomImageFact = async (firstWord) => {

      const res = await fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`);
      const data = await res.json();
      const { url } = data;  
      return url;


}