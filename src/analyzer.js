const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arrayPalabras = text.trim().split(" ");
    return arrayPalabras.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.trim().length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let letrasTotales = 0;
    for (let index = 0; index < text.length; index++) {
      if (text[index] !== " " && text[index] !== "," && text[index] !== ".") {
        letrasTotales++;
      }
    }
    //retornar el total de letras
    return letrasTotales;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arrayPalabras = text.trim().split(" ");
    let suma = 0;
    let promedio = 0;
    arrayPalabras.forEach((palabra) => {
      suma += palabra.length;
    });
    promedio = suma / arrayPalabras.length;
    return parseFloat(promedio.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numerosEncontrados = text.match(/(\d+\.\d+|\d+)(?![\w\d])/g);
    if (numerosEncontrados === null) {
      return 0;
    }
    return numerosEncontrados.length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numerosEncontrados = text.match(/(\d+\.\d+|\d+)(?![\w\d])/g);
    let sum = 0;
    if (numerosEncontrados === null) {
      return 0;
    } else {
      numerosEncontrados.forEach((number) => {
        sum += parseFloat(number);
      });
    }
    return sum;
  },
};

export default analyzer;
