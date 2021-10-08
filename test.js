const assert = require('assert');
const fs = require('fs');

const { encrypt, decrypt } = require('./index');

describe('Encryption', () => {
    it('should encrypt and decrypt text', () => {
        const text = 'This will be encrypted';
        const encryptionKey = 'mysecretkey1337';

        const encrypted = encrypt(text, encryptionKey);

        const decrypted = decrypt(encrypted, encryptionKey);

        assert(decrypted.toString() === text);
    });

    it('should encrypt and decrypt a buffer', () => {
        const text = 'This will be encrypted';
        const encryptionKey = 'mysecretkey1337';

        const encrypted = encrypt(Buffer.from(text), encryptionKey);

        const decrypted = decrypt(encrypted, encryptionKey);

        assert(decrypted.toString() === text);
    });

    it('should encrypt and decrypt an image', () => {
        const image = fs.readFileSync('./shyguy.png');

        const imageHex = image.toString('hex');

        const encryptionKey = 'mysecretkey1337';

        const encrypted = encrypt(image, encryptionKey);

        const decrypted = decrypt(encrypted, encryptionKey);

        assert(decrypted.toString('hex') === imageHex);
    });
    


});