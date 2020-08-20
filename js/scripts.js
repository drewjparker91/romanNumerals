alert("hello");
$(document).ready(function() {
  event.preventDefault();

  let num = $("inputNum").val();
  
  function converter(array){
    newArray = [].val;
    for (const element of array) {
      if (element === "1000") {
        newArray.push ("M");
      } else if (element === "500") {
        newArray.push("D");
      } else if (element === "100") {
        newArray.push("C"); 
      } else if (element === "50") {
        newArray.push(("L");
      } else if (element === "10") {
        newArray.push("X"); 
      } else if (element === "5") {
        newArray.push("V"); 
      } else if (element === "1") {
        newArray.push("I");
      };
    };
    return newArray;
  };
 

outputNumeral = converter(num);

$("#romanNumeral").text(outputNumeral);
$("#romanNumeral").show();
});
