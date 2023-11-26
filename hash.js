//use require to include external modules to js code
const { createHash } = require('crypto');

//upon input, calls the function createHash with the parameter
// the hashing algorigthm 
function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = 'hi-mom';
const hash1 = hash(password);
console.log(hash1);

password = 'hi-mom';
const has2 = hash(password);
const match = hash1 === has2;

console.log(match ? ' good password' : 'password does not match');