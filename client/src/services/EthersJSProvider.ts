import Web3Class from '../abstract/Web3Class';
import { BigNumber, ethers } from 'ethers';
import { roboPunksNFTAddress, RoboPunksNFTJSON } from '../constants/constants';

class EthersJSProvider implements Web3Class {
  public async connect() {
    try {
      const accounts: string[] = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balanceBig = await provider.getBalance(accounts[0]);
      const balance = ethers.utils.formatEther(balanceBig);
      return { balance, account: accounts[0] };
    } catch (e) {
      return { balance: null, account: null };
    }
  }
  public async mint(_quantity: number, _CurrentAccount: string) {
    if (window.ethereum) {
      console.log('mint with ethers');
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(roboPunksNFTAddress, RoboPunksNFTJSON.abi, signer);
      try {
        const response = await contract.mint(BigNumber.from(_quantity), {
          value: ethers.utils.parseEther((0.02 * _quantity).toString()),
          from: _CurrentAccount
        });

        console.log('response: ', response);
      } catch (err) {
        console.log('error: ', err);
      }
    }
  }
}
const provider = new EthersJSProvider();
export default provider;
