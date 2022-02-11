const constructor_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"}]
const OwnershipTransferred_abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
const SwapTokenLockerCreated_abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"address","name":"locker","type":"address"}],"name":"SwapTokenLockerCreated","type":"event"}]
const companyWallet_abi = [{"inputs":[],"name":"companyWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const createTokenLocker_abi = [{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"createTokenLocker","outputs":[{"internalType":"address","name":"locker","type":"address"}],"stateMutability":"payable","type":"function"}]
const feesInETH_abi = [{"inputs":[],"name":"feesInETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const getAllContracts_abi = [{"inputs":[],"name":"getAllContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]
const getDeployed_abi = [{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDeployed","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"}]
const getLastDeployed_abi = [{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getLastDeployed","outputs":[{"internalType":"address","name":"locker","type":"address"}],"stateMutability":"view","type":"function"}]
const getTime_abi = [{"inputs":[],"name":"getTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const getUnlockTime_abi = [{"inputs":[],"name":"getUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const lock_abi = [{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const owner_abi = [{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const renounceOwnership_abi = [{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const setCompanyWallet_abi = [{"inputs":[{"internalType":"address payable","name":"_companyWallet","type":"address"}],"name":"setCompanyWallet","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const setFeesInETH_abi = [{"inputs":[{"internalType":"uint256","name":"_feesInETH","type":"uint256"}],"name":"setFeesInETH","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const transferOwnership_abi = [{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const unlock_abi = [{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"}]
module.exports = {
    constructor_abi,
    OwnershipTransferred_abi,
    SwapTokenLockerCreated_abi,
    companyWallet_abi,
    createTokenLocker_abi,
    feesInETH_abi,
    getAllContracts_abi,
    getDeployed_abi,
    getLastDeployed_abi,
    getTime_abi,
    getUnlockTime_abi,
    lock_abi,
    owner_abi,
    renounceOwnership_abi,
    setCompanyWallet_abi,
    setFeesInETH_abi,
    transferOwnership_abi,
    unlock_abi
}