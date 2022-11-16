const crypto = require("crypto-js");

var data = "This is the data that need to be encrypted";
var key = "password@111";
// Encrypte the data
var encrypted = crypto.AES.encrypt(data, key).toString();
console.log("Encrypted data");

// Printing the encrypted data
console.log(encrypted);
console.log("Decrypted data");

// Decrypting the data
var decrypted = crypto.AES.decrypt(encrypted, key).toString(crypto.enc.Utf8);
console.log(decrypted);
