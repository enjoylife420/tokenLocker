// const tokenAddress = '0xdb9438f5e3afa5ced760be9692604c3c5ab816d1';
const tokenAddress = '0x2f4FC16308Be09e7611a047B9576881Eb5298dD6';
const tokenCreator = '0x129ebb3b65c71514a4dfcdaf3adc18c95d5a8743';
const lockerAddress = {
    "Ethereum": "0x8ba74905c9ab0aa185e04498e2f83f8cdec20561",
    "Binance Smart Chain": "0x2ac8a31ac8325974a57efc34672f3e348b2e715f",
    "Avalanche": "0x8ba74905c9ab0aa185e04498e2f83f8cdec20561",
    "Avalanche_testnet": "0x5FCCa8AEf0a280b77E68a695B153a674d9b03408"
};
const provider = {
    "Ethereum": "https://mainnet.infura.io/v3/3587df9c45a740f9812d093074c6a505",
    "Binance Smart Chain": "https://api.avax.network/ext/bc/C/rpc",
    "Avalanche": "https://api.avax.network/ext/bc/C/rpc",
    "Avalanche_testnet": "https://api.avax-test.network/ext/bc/C/rpc"
};
const chain = {
    "Ethereum": '0x1',
    "Binance Smart Chain": '0x38',
    "Avalanche": '0xa86a',
    "Avalanche_testnet": "0xa869"
};
const liquidityList = [
    'UNI-V2',
    'Cake-LP',
    'JLP',
    "HUL"
]

const networks = [
    // 'Ethereum',
    // 'Binance Smart Chain',
    'Avalanche',
    // "Avalanche_testnet"
]
const wavax = '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7';
const wavax_test = '0xd00ae08403B9bbb9124bB305C09058E32C39A48c';
const weth = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const wbnb = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
// const swapTokenLockerFactory = '0x6a33a15d826e59792b60dec950e8af2fa7d58f9e';
const swapTokenLockerFactory = {
    "Ethereum": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "Binance Smart Chain": "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
    "Avalanche": '0xA21121b3DfD558a3A91d508049D1454073c134D4',
    "Avalanche_testnet": "0x01c211e90F042D87faeDe2158b0D1025dF4734E7"
};

module.exports = {
    tokenAddress,
    lockerAddress,
    provider,
    chain,
    liquidityList,
    wavax,
    weth,
    wbnb,
    wavax_test,
    swapTokenLockerFactory,
    tokenCreator,
    networks
}