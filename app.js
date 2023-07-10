//todo:apply styles
const btn = document.querySelector(".submit-btn");
const mainbody = document.querySelector(".main-body");
const output = document.querySelector(".output");
const error = document.querySelector(".error");
// <.......................................................................................>
btn.addEventListener("click", function () {
  const input = document.querySelector(".user-input");
  let isValid = validateInput(input.value);
  if (isValid) {
    convertToDecimal(input.value);
  } else {
    output.textContent = "";
  }
  //resetting the input value after clicking submit-btn
  input.value = "";
});
// <.......................................................................................>
function convertToDecimal(bin) {
  let n = bin.length;
  let dec = 0;
  for (let i = n - 1; i >= 0; i--) {
    // (+bin[i]) converts the char to integer
    dec += +bin[i] * Math.pow(2, n - i - 1);
  }
  output.textContent = "The Decimal value of " + bin + " is " + dec;
  //so the text disappears after 3 seconds
  setTimeout(function () {
    output.textContent = "";
  }, 3000);
}

function validateInput(originalInput) {
  let pattern = /^(?=.*0)[01]*$|^(?=.*1)[01]*$/;
  let isValid = pattern.test(originalInput);
  console.log(isValid);
  if (!isValid) {
    error.textContent = "!Please enter only binary numbers";
    //so the text disappears after 3 seconds
    setTimeout(function () {
      error.textContent = "";
    }, 3000);
  }
  return isValid;
}
