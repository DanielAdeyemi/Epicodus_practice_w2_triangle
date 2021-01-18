$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let number1 = parseInt($("#num1").val());
    let number2 = parseInt($("#num2").val());
    let number3 = parseInt($("#num3").val());
    checker(number1, number2, number3);
  });
})