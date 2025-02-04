/**
 * @jest-environment jsdom
 */

const { soundsList } = require('../soundsfx');

beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('invaders.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
})

describe('soundsList object contains correct keys', () =>{
    test('soundsList key exists', () => {
        expect('soundsList' in soundsfx).toBe(true);
    })
})