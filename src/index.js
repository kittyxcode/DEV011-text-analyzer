import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//obtener elemento dom a observar
//const textarea = document.querySelector("textarea");
const textarea = document.querySelector('textarea[name="user-input"]');
//obtener lista de elementos li
const listLI = document.getElementsByClassName("li-style");

//agregar listener y funcion asociada
textarea.addEventListener("input", updateValuesController);

//En esta funcion se actualiza los valores de texto de los 6 li
function updateValuesController() {
  alert("hola");
  //obtener total caracteres
  const charactersCount = analyzer.getCharacterCount(textarea.value);
  //modificar li element value
  listLI[0].textContent = "Caracteres: " + charactersCount;

  //obtener total caracteres sin espacios
  const charactersCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  listLI[1].textContent = "Caracteres sin espacio: " + charactersCountExcludingSpaces;

  //
  const wordsCount = analyzer.getWordCount(textarea.value);
  listLI[2].textContent = "Palabras: " + wordsCount;

  const numbersCount = analyzer.getNumberCount(textarea.value);
  listLI[3].textContent = "Numeros: " + numbersCount;

  const numbersSum = analyzer.getNumberSum(textarea.value);
  listLI[4].textContent = "Suma Numeros: " + numbersSum;

  const averageWordLength = analyzer.getAverageWordLength(textarea.value);
  listLI[5].textContent = "Promedio longitud: " + averageWordLength;
}
