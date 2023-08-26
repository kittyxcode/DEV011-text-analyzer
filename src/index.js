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
  //obtener total caracteres
  const characterCount = analyzer.getCharacterCount(textarea.value);
  listLI[0].textContent = "Caracteres: " + characterCount;

  //obtener total caracteres sin espacios
  const characterespacios= analyzer.getCharacterCountExcludingSpaces(textarea.value);
  listLI[1].textContent= "caracteres sin espacio "+ characterespacios;

  //obtener total palabras
  const wordsTotal= analyzer.getWordCount(textarea.value);
  //modificar li element
  listLI[2].textContent="Palabras: " + wordsTotal;
}
