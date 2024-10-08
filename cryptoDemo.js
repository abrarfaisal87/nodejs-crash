import crypto from 'crypto';

const hash = crypto.createHash('sha256');
hash.update('abrar1234');
console.log(hash.digest('hex'));

crypto.randomBytes(16,(err,buff)=>{
    if(err) throw err;
    console.log(buff.toString('hex'));
})

//create cypher and decypher
const algo = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algo,key,iv);
let encrypted = cipher.update('i am a niggha','utf-8','hex');
encrypted+= cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algo,key,iv);
let decrypted = decipher.update(encrypted,'hex','utf-8');
decrypted+= decipher.final('utf-8');
console.log(decrypted);
