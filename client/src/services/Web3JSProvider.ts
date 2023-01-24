import Web3Class from '../abstract/Web3Class';
import Web3 from 'web3';
import { roboPunksNFTAddress } from '../constants/constants';
import { RoboPunksNFTJSON } from '../constants/constants';

const web3 = new Web3(Web3.givenProvider);

class Web3JSProvider implements Web3Class {
  public async connect(): Promise<{ balance: string | null; account: string | null }> {
    try {
      const accounts = await web3.eth.getAccounts();
      const balanseBig = await web3.eth.getBalance(accounts[0]);
      const balance = web3.utils.fromWei(balanseBig, 'ether');
      return { balance, account: accounts[0] };
    } catch (e) {
      return { balance: null, account: null };
    }
  }
  public async mint(_quantity: number, _CurrentAccount: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const contract = new web3.eth.Contract(RoboPunksNFTJSON.abi, roboPunksNFTAddress);
    try {
      console.log('mint with web3');
      const response = await contract.methods.mint(web3.utils.toBN(_quantity)).send({
        from: _CurrentAccount,
        value: web3.utils.toWei((0.02 * _quantity).toString())
      });
      console.log('response: ', response);
    } catch (err) {
      console.log('error: ', err);
    }
  }
}
const provider = new Web3JSProvider();
export default provider;
