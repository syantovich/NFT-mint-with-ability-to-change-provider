import Web3Class from '../abstract/Web3Class';
import web3JSProvider from './Web3JSProvider';
import ethersJSProvider from './EthersJSProvider';

export interface IProvider {
  name: string;
  current: Web3Class;
}
class ActiveProvider {
  private providers: IProvider[] = [];
  public provider: IProvider;

  constructor(providers: IProvider[]) {
    this.providers = providers;
    this.provider = providers[0];
  }

  getNames() {
    return this.providers.map((provider) => provider.name);
  }

  setProvider(name: string) {
    const index = this.providers.findIndex((item) => item.name === name);
    if (index !== -1) {
      this.provider = this.providers[index];
      console.log(`Set provider: ${name}`);
      return true;
    }
    return false;
  }
}
export const activeProvider = new ActiveProvider([
  { name: 'Web3', current: web3JSProvider },
  { name: 'Ethers', current: ethersJSProvider }
]);
