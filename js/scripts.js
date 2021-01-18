function checker(n1, n2, n3) {
  if ((n1 + n2) <= n3 || (n1 + n3) <= n2 || (n2 + n3) <= n1) {
    return ("Impossible to make triangle with sides you have provided");
  } else if (n1 === n2 && n1 === n3) {
    return ("Your sides will make an Equilateral Triagle");
  } else if (n1 === n2 || n2 === n3 || n1 === n3) {
    return ("Your sides will make an Isosceles Triangle");
  } else {
    return ("Your sides will make Scalene Triangle");
  }
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let number1 = parseInt($('#num1').val());
    let number2 = parseInt($('#num2').val());
    let number3 = parseInt($('#num3').val());
    let check = checker(number1, number2, number3);
    $('#output').text(check);

  });
})