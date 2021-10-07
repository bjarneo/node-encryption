const assert = require('assert');

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
});