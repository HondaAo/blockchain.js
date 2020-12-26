const cryptoHash = require("./crypt-hash");

describe('cryptoHash',() => {
    it('generate a sha-256',() => {
        expect(cryptoHash('foo').toUpperCase()).toEqual('2C26B46B68FFC68FF99B453C1D30413413422D706483BFA0F98A5E886266E7AE');
    })
})