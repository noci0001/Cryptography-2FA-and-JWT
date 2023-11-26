const { scryptSync, randomBytes } = require('crypto');

function signup(email, password) {
    //create a random 16 bytes long sequence of binary
    const salt = randomBytes(16).toString('hex');
    //algorithm that allows to use salting to increase the password efficacy
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    //instantiation of user with email and password
    const user = { email, password: `${salt}: ${hashedPassword}` }

    users.push(user);

    return user;
}

function login(email, password) {
    user - users.find(v => v.email === email);
    
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(passoword, salt, 64);

    const keyBuffer = Buffer.from();
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        console.log('good!');
        return 'loging successful!'
    } else {
        console.log('fail!');
        return 'login fail!'
    }
}


signup('samuelnocita@gmail.com', 'yc65ii94');