const moinsButtons = document.querySelectorAll(".moins");
const plusButtons = document.querySelectorAll(".plus");
const inputs = document.querySelectorAll(".valeur");

moinsButtons.forEach((moinsButton, index) => {
  moinsButton.addEventListener("click", function() {
    let valeurActuelle = parseInt(inputs[index].value);
    if (valeurActuelle > 1) {
      valeurActuelle--;
      inputs[index].value = valeurActuelle;
    }
  });
});

plusButtons.forEach((plusButton, index) => {
  plusButton.addEventListener("click", function() {
    let valeurActuelle = parseInt(inputs[index].value);
    valeurActuelle++;
    inputs[index].value = valeurActuelle;
  });
});
