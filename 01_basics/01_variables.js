variable.js  

const acountId = 77777
let acountEmail = "riaAANKHA@s.com"
var acountPassword = "1234566"
acountCity = "Shivpuri"
let acountState

// acountId = 2 acount id not chngeble bcz "const" not change   
/* var not usable for latest projects
becauese of issue in block scope and fubtional scope
*/

acountEmail = "same@sam.com"
acountPassword = "0987654"
acountCity = "gwalior"
 
console.log(acountId);

console.table([acountId, acountEmail, acountPassword, acountCity, acountState]);
