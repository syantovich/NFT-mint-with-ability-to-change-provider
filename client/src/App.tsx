import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainMint from './components/MainMint/MainMint';

function App() {
  const [account, setAccount] = useState<string>('');
  const [balance, setBalance] = useState<string | null>(null);

  return (
    <div className="overlay">
      <div className="App">
        <div className="App">
          <NavBar
            account={account}
            setAccount={setAccount}
            balance={balance}
            setBalance={setBalance}
          />
          <MainMint account={account} setAccount={setAccount} />
        </div>
        <div className="moving-background"> </div>
      </div>
    </div>
  );
}

export default App;
