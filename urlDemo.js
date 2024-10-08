import url from 'url'

const urlString = 'https://www.google.com?q=Nigga';

const urlObj = new URL(urlString);

console.log(urlObj);
console.log(import.meta.url);
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);
const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'))
params.append('username','abrar');
params.delete('username');
console.log(params);

