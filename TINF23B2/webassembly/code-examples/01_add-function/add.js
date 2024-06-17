const calculateResult = () => {
  WebAssembly.instantiateStreaming(fetch("add.wasm")).then(
    (results) => {
      const add = results.instance.exports.add;
      const calculationResult = add(41, 1);
      const ergebnisElement = document.getElementById("ergebnis");
      ergebnisElement.innerText = calculationResult;
    },
  );
};
addEventListener("DOMContentLoaded", calculateResult);