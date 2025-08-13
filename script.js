document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("converter-form");
  const amountInput = document.getElementById("amount");
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const convertedAmount = document.getElementById("convertedAmount");
  const resultDiv = document.querySelector(".result");

  const unitsToMM = {
    px: 0.2645833333,
    rem: 4.233333333,
    cm: 10,
    mm: 1,
    Q: 0.25,
    in: 25.4,
    pc: 4.233333333,
    pt: 0.352777778,
  };

  function formatNumber(num) {
    // Remove zeros desnecessários e mostra inteiro se for redondo
    return Number.isInteger(num) ? num : parseFloat(num.toFixed(4));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita recarregar a página

    const amount = parseFloat(amountInput.value);
    const fromUnit = fromCurrency.value;
    const toUnit = toCurrency.value;

    if (isNaN(amount) || !fromUnit || !toUnit) {
      convertedAmount.value = "";
      resultDiv.textContent = "Preencha todos os campos corretamente!";
      return;
    }

    const valueInMM = amount * unitsToMM[fromUnit];
    const finalValue = valueInMM / unitsToMM[toUnit];

    const formattedValue = formatNumber(finalValue);

    convertedAmount.value = formattedValue;
    resultDiv.textContent = `${amount} ${fromUnit} = ${formattedValue} ${toUnit}`;
  });
});
