/*
    동기의 경우
*/

import fs from 'fs'

fs.writeFileSync(
    'text2.txt',
    'hello',
    {
        encoding : 'utf-8'
    }
);

console.log('done')