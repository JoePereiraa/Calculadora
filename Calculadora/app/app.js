//Calculadora
(function () {
  let tela = document.querySelector(".tela");
  let botoes = document.querySelectorAll(".btn");
  let limpar = document.querySelector(".btn-limpar");
  let igual = document.querySelector(".igual");

  botoes.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      tela.value += value;
    });
  });

  igual.addEventListener("click", function (e) {
    if (tela.value === "") {
      tela.value = "";
    } else {
      let responda = eval(tela.value);
      tela.value = responda;
    }
  });
  limpar.addEventListener("click", function (e) {
    tela.value = "";
  });
})();
