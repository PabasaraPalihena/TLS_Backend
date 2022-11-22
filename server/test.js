const map = new Map();
var SHA256 = require("crypto-js/sha256");

map.set("mg", SHA256("hello ssd").toString());
map.set("mg1", SHA256("hello a2").toString());
map.set("mg2", SHA256("hi").toString());
console.log(map.values());
console.log(map.size);
console.log(map.has("mg"));

for (let [k, v] of map) {
  console.log(k, " :", v);
}

var plainText = "GeeksForGeeks";
var hasheddata = SHA256(plainText).toString();
console.log(hasheddata);
