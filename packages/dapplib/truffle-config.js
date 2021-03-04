require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword stone raise pave proud hunt pave army gift'; 
let testAccounts = [
"0xa5c672fc0594ad46d50fce026638855b773b65005fb40e2546d2d49cbb2eaba2",
"0x662129cb026f7ab8ffdbcc1c0d6bd13dcccea820fb60a26c857ca56c5e718045",
"0x41dd125f4ef5072fff828fc74f3df6df95d0871f877dcf5f1db3b0861204b0cc",
"0xa6daa4b1fa9f37d3cbeb2b97dbda32b38e443376a2ebc5f230d6bc8195d09e67",
"0x81a06c06277a91855fde7fc8fa504899309b197bff36de836a2bcef3d631960a",
"0x250f348e508e23892ed8a832ee9955b79c3799336e0b2f3439025400fd7541aa",
"0x6e4184e6a3621e51d6287d4d252264902c7a17771070ad37898e829d7862c9c0",
"0x68d0e6890d5a8391b46bb0e9b1b649a8ac1733cf72ee672efbb2234e5bba8943",
"0x9c210920b9822c67595717b69d6d9cd9cb06d891bb333b5712dd51422a21b9f3",
"0xaf70fff9be548407c380cee0408453b8e06b80890eb87cc92c0c11374689d730"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
