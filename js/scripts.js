$(document).ready(function() {
  $("#inputNumber").submit(function() {
    let num = $("#inputNum").val();
    let numArray = num.split("");
    
    function converter(array){
      newArray = [];
      for (const element of array) {
        if (element === "1000") {
          newArray.push ("M");
        } else if (element === "500") {
          newArray.push("D");
        } else if (element === "100") {
          newArray.push("C"); 
        } else if (element === "50") {
          newArray.pushh("L");
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
  

    outputNumeral = converter(numArray);

    $("#romanNumeral").text(outputNumeral);
    $("#romanNumeral").show();
    event.preventDefault();
  })
});
