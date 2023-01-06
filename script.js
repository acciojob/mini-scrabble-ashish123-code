//your code here
const textbox = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

textbox.addEventListener("input", function() {
  letterCount.innerHTML = textbox.value.length;
});

