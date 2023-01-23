//initial setup
let a = 3;
let b = 5;
let c;

let printing = 'let a = 3;\n';
printing += 'let b = 5;\n';
printing += 'let c;\n';
printing += '----------\n';
printing += ('a + b = ' + (a + b) + '\n');
printing += ('a - b = ' + (a - b) + '\n');
printing += ('a * b = ' + (a * b) + '\n');
printing += ('a / b = ' + (a / b) + '\n');
printing += ('a % b = ' + (a % b) + '\n');
printing += ('(a += b): ' + (a += b) + '\n');
printing += ('(a -= b): ' + (a -= b) + '\n');
printing += ('(a *= b): ' + (a *= b) + '\n');
printing += ('(a /= b): ' + (a /= b) + '\n');
printing += ('(a %= b): ' + (a %= b) + '\n');
printing += ('(a == b): ' + (a == b) + '\n');
printing += ('(a != b): ' + (a != b) + '\n');
printing += ('(a > b): ' + (a > b) + '\n');
printing += ('(a < b): ' + (a < b) + '\n');
printing += ('(!a && !c): ' + (!a && !c) + '\n');
printing += ('(!a || !c): ' + (!a || !c) + '\n');

alert(printing);


// // Declare variable first_name and assign it with value "Maxence".
let first_name="Maxence";
// // Declare variable last_name and assign it with value "Langlois".
let last_name="Langlois";
// // Declare variable email and assign it with my college email.
let email = "lang0553@algonquinlive.com";
// // Declare variable output.
let output;

output = ' My name is ' + first_name + ' ' + last_name + '.' + ' You can contact me at ' + ' ' + email + '.';


alert(output);
