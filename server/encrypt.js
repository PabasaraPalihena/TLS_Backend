const crypto = require("crypto-js");
// require("dotenv").config();
var data = "This is the data that need to be encrypted";
const secretkey = "12345";
// const secretkey = process.env.KEY;

// Encrypte the data
var encrypted = crypto.AES.encrypt(data, secretkey).toString();
console.log("Encrypted data");

// Printing the encrypted data
console.log(encrypted);
console.log("Decrypted data");

// Decrypting the data
var decrypted = crypto.AES.decrypt(encrypted, secretkey).toString(
  crypto.enc.Utf8
);
console.log(decrypted);
