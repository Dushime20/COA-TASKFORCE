//reverse string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
//get ASCII.
function getAsciiCodes(str) {
  let AsciiCodes = [];
  for (let i = 0; i < str.length; i++) {
    AsciiCodes.push(str.charCodeAt(i));
  }
  return AsciiCodes;
}
//get input when user click on submit button and this play out put on label

var string;
document.getElementById("submitBtn").onclick = function () {
  string = document.getElementById("input").value;

  let a = string.length;
  if (a % 3 == 0 && a % 5 == 0) {
    var reversedStrings = reverseString(string);
    var ascicodes = getAsciiCodes(string);
    document.getElementById(
      "output"
    ).innerText = `length of string is: ${a},Reversed String: ${reversedStrings}, ASCII Codes: ${ascicodes.join(
      ", "
    )}`;
  } else if (a % 3 == 0) {
    // Reverse the input string.
    var reversedString = reverseString(string);

    // Display the reversed string.
    document.getElementById(
      "output"
    ).innerText = `length of string is: ${a},Reversed String: ${reversedString}`;
  } else if (a % 5 == 0) {
    var ascicode = getAsciiCodes(string);
    document.getElementById(
      "output"
    ).innerText = `length of string is: ${a},ASCII Codes: ${ascicode.join(
      ", "
    )}`;
  }
};
