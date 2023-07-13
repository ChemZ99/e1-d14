const generatetablebutton = document.getElementById("tablegenerator");

const extractnumberbutton = document.getElementById("numbergenerator");
let extractednumber = 0;
const previouslyextractednumber = [];

generatetablebutton.onclick = function () {
  const tableplace = document.getElementById("tableplace");

  for (i = 1; i < 77; i++) {
    const numbercontainer = document.createElement("div");
    numbercontainer.classList.add("numrules");
    const numbertext = document.createElement("p");
    numbertext.classList.add("tablereference");
    numbertext.innerText = i;
    numbercontainer.appendChild(numbertext);
    tableplace.appendChild(numbercontainer);
  }
};

extractnumberbutton.onclick = function () {
  const generatedtable = document.getElementsByClassName("tablereference");

  do {
    extractednumber = Math.floor(Math.random() * 76 + 1);

    previouslyextractednumber.push(extractednumber);
  } while (previouslyextractednumber.includes(extractednumber));
  {
  }
  for (i = 1; i < generatedtable.length; i++) {
    if (extractednumber === parseInt(generatedtable[i].innerText)) {
      generatedtable[i].classList.add("eliminated");
    }
  }
};
