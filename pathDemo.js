import path from 'path';
import url from 'url';

const filePath = './1/2/3/test.txt';

//basename
console.log(path.basename(filePath));
//dirname
console.log(path.dirname(filePath));
//parse
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename,__dirname);