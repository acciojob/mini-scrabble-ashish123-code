//your code here

 // get the elements we will be working with
 const textbox = document.getElementById('evaluatedText');
 const letterCount = document.getElementById('letterCount');

 // listen for changes to the textbox
 textbox.addEventListener('input', updateLetterCount);

 function updateLetterCount() {
     // update the letter count to the length of the text in the textbox
     letterCount.innerHTML = textbox.value.length;
 }

