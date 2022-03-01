require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name recipe stick promote grid praise army general'; 
let testAccounts = [
"0x12815432a5ec242d225cefceb5281f17b8e1b489b4ae32dead3baa704d19f5bc",
"0x6e42e7152186e32130df8df4601112d51b2a349f1a7562a57f36fdd4ea15badf",
"0xa9d28f9f02ff17b91e94d46e3a2432a6532144d0dff216c3bf6241af2880bcb1",
"0xa64e7bff911248338c8428146d9e7143b827132f78e596ef4b5ccf9e25c2385a",
"0x047abb500e4e8fd0cf98fd07e3e6e278ad6cce70afd75b6c44d91f97c3d4f470",
"0x3aff4183fe2c5d9e1862f562aafe7312537fba4c22faf4a73d3b0ae18df18f19",
"0x9ca8233dd6fd9b70fad741fec965a883947122c490dd016475870945fdb5c238",
"0xb5bcf258e335aa15839a58261e4a7e576ba373b11062319386803809077c85f1",
"0x7439c3be1768c26781a0d32f2e779dc77e2af222dbc241311f9cef37760436fb",
"0x666780c4227d7efe50f65fd28b5d89ea162d5bff1e23ea023dbb7ed997077190"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

