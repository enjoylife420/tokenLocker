const createMultipleLocks_abi = [{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_withdrawalAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"_unlockTimes","type":"uint256[]"}],"name":"createMultipleLocks","outputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"stateMutability":"payable","type":"function"}]
const extendLockDuration_abi = [{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_unlockTime","type":"uint256"}],"name":"extendLockDuration","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const FeesChanged_abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fees","type":"uint256"}],"name":"FeesChanged","type":"event"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const lockTokens_abi = [{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_withdrawalAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_unlockTime","type":"uint256"}],"name":"lockTokens","outputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"stateMutability":"payable","type":"function"}]
const LogLocking_abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"SentToAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"AmountLocked","type":"uint256"}],"name":"LogLocking","type":"event"}]
const LogWithdrawal_abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"SentToAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"AmountTransferred","type":"uint256"}],"name":"LogWithdrawal","type":"event"}]
const OwnershipTransferred_abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
const pause_abi = [{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const Paused_abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"}]
const renounceOwnership_abi = [{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const setCompanyWallet_abi = [{"inputs":[{"internalType":"addresspayable","name":"_companyWallet","type":"address"}],"name":"setCompanyWallet","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const setFeesInETH_abi = [{"inputs":[{"internalType":"uint256","name":"_feesInETH","type":"uint256"}],"name":"setFeesInETH","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const transferLocks_abi = [{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_receiverAddress","type":"address"}],"name":"transferLocks","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const transferOwnership_abi = [{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const unpause_abi = [{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const withdrawTokens_abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const allDepositIds_abi = [{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allDepositIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const companyWallet_abi = [{"inputs":[],"name":"companyWallet","outputs":[{"internalType":"addresspayable","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const depositId_abi = [{"inputs":[],"name":"depositId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const depositsByWithdrawalAddress_abi = [{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"depositsByWithdrawalAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const feesInETH_abi = [{"inputs":[],"name":"feesInETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const getAllDepositIds_abi = [{"inputs":[],"name":"getAllDepositIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]
const getDepositDetails_abi = [{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getDepositDetails","outputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_withdrawalAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"},{"internalType":"uint256","name":"_unlockTime","type":"uint256"},{"internalType":"bool","name":"_withdrawn","type":"bool"}],"stateMutability":"view","type":"function"}]
const getDepositsByWithdrawalAddress_abi = [{"inputs":[{"internalType":"address","name":"_withdrawalAddress","type":"address"}],"name":"getDepositsByWithdrawalAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]
const getTokenBalanceByAddress_abi = [{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_walletAddress","type":"address"}],"name":"getTokenBalanceByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const getTotalTokenBalance_abi = [{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"getTotalTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const lockedToken_abi = [{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockedToken","outputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"withdrawalAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"unlockTime","type":"uint256"},{"internalType":"bool","name":"withdrawn","type":"bool"}],"stateMutability":"view","type":"function"}]
const owner_abi = [{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const paused_abi = [{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
const walletTokenBalance_abi = [{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"walletTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

module.exports = {
    createMultipleLocks_abi,
    extendLockDuration_abi,
    FeesChanged_abi,
    lockTokens_abi,
    LogLocking_abi,
    LogWithdrawal_abi,
    OwnershipTransferred_abi,
    pause_abi,
    Paused_abi,
    renounceOwnership_abi,
    setCompanyWallet_abi,
    setFeesInETH_abi,
    transferLocks_abi,
    transferOwnership_abi,
    unpause_abi,
    withdrawTokens_abi,
    allDepositIds_abi,
    companyWallet_abi,
    depositId_abi,
    depositsByWithdrawalAddress_abi,
    feesInETH_abi,
    getAllDepositIds_abi,
    getDepositDetails_abi,
    getDepositsByWithdrawalAddress_abi,
    getTokenBalanceByAddress_abi,
    getTotalTokenBalance_abi,
    lockedToken_abi,
    owner_abi,
    paused_abi,
    walletTokenBalance_abi
}