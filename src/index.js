import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//obtener elemento dom a observar
const textarea = document.querySelector("textarea");

//agregar listener y funcion asociada
textarea.addEventListener("input", updateValuesController);

//En esta funcion se actualiza
function updateValuesController() {
  const numero = analyzer.getCharacterCount(textarea.value);
  alert(numero);
}
