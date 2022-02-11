const constructor_abi = [{"inputs":[{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_feesInETH","type":"uint256"},{"internalType":"address","name":"_companyWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"}]
const AdminChanged_abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"}]
const candidateChanged_abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldCandidate","type":"address"},{"indexed":false,"internalType":"address","name":"newCandidate","type":"address"}],"name":"candidateChanged","type":"event"}]
const admin_abi = [{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const becomeAdmin_abi = [{"inputs":[],"name":"becomeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const candidate_abi = [{"inputs":[],"name":"candidate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const claimToken_abi = [{"inputs":[{"internalType":"uint128","name":"_amount","type":"uint128"}],"name":"claimToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]
const companyWallet_abi = [{"inputs":[],"name":"companyWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const emergencyWithdraw_abi = [{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const feesInETH_abi = [{"inputs":[],"name":"feesInETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const getLockData_abi = [{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getLockData","outputs":[{"internalType":"uint128","name":"","type":"uint128"},{"internalType":"uint128","name":"","type":"uint128"},{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"}]
const getToken_abi = [{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const lockData_abi = [{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lockData","outputs":[{"internalType":"uint128","name":"amount","type":"uint128"},{"internalType":"uint128","name":"claimedAmount","type":"uint128"},{"internalType":"uint64","name":"lockTimestamp","type":"uint64"},{"internalType":"uint64","name":"lastUpdated","type":"uint64"},{"internalType":"uint32","name":"lockHours","type":"uint32"}],"stateMutability":"view","type":"function"}]
const sendLockTokenMany_abi = [{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"},{"internalType":"uint128[]","name":"_amounts","type":"uint128[]"},{"internalType":"uint32[]","name":"_lockHours","type":"uint32[]"},{"internalType":"uint256","name":"_sendAmount","type":"uint256"}],"name":"sendLockTokenMany","outputs":[],"stateMutability":"payable","type":"function"}]
const setCandidate_abi = [{"inputs":[{"internalType":"address","name":"_candidate","type":"address"}],"name":"setCandidate","outputs":[],"stateMutability":"nonpayable","type":"function"}]
module.exports = {
    constructor_abi,
    AdminChanged_abi,
    candidateChanged_abi,
    admin_abi,
    becomeAdmin_abi,
    candidate_abi,
    claimToken_abi,
    companyWallet_abi,
    emergencyWithdraw_abi,
    feesInETH_abi,
    getLockData_abi,
    getToken_abi,
    lockData_abi,
    sendLockTokenMany_abi,
    setCandidate_abi
}