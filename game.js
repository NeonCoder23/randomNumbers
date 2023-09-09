function generatePhoneNumber() {
    var phoneNumber = "";
    var kod = "";
    var kodTwo = ""
    var digits = "123456789";
    var code = "98";

    for (var i = 0; i < 7; i++) {
      phoneNumber += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    for (var i = 0; i < 1; i++) {
      kodTwo += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    for (var i = 0; i < 1; i++) {
      kod += code.charAt(Math.floor(Math.random() * code.length));
    }

    document.getElementById("phone-number").textContent = "+998" + kod + kodTwo + phoneNumber;
}
function clearPhoneNumber() {
    document.getElementById("phone-number").textContent = "";
}