abstract class Web3Class {
  abstract connect(): Promise<{ balance: string | null; account: string | null }>;
  abstract mint(_quantity: number, _CurrentAccount: string): void;
}
export default Web3Class;
