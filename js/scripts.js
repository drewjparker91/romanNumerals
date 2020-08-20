$(document).ready(function() {
  $("#inputNumber").submit(function() {
    let num = $("#inputNum").val();
    let numArray = num.split("");
    
    function converter(array){
      let newArray = [];
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
    
    function singleDigit(number){
    let digit;
   
      if (number === "1"){
      digit = "I";
      } else if (number === "2"){
        digit = "II";
      } else if (number === "3"){
        digit = "III";
      } else if (number === "4"){
        digit = "IV";
      } else if (number === "5"){
        digit = "5";      
      } else if (number === "6"){
        digit = "VI";
      } else if (number === "7"){
        digit = "VII";
      } else if (number === "8"){
        digit = "VIII";
      } else (number === "9"){
        digit = "IX";
      };

      return digit;
    };
  

    outputNumeral = converter(numArray);

    $("#romanNumeral").text(outputNumeral);
    $("#romanNumeral").show();
    event.preventDefault();
  })
});
