import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//obtener elemento dom a observar
const textarea = document.querySelector("textarea");

//obtener lista de elementos li
const listLI= document.getElementsByClassName("li-style");

//agregar listener y funcion asociada
textarea.addEventListener("input", updateValuesController);


//En esta funcion se actualiza los valores de texto de los 6 li
function updateValuesController() {
  const characterCount = analyzer.getCharacterCount(textarea.value);
  listLI[0].textContent="caracteres " + characterCount;
}
