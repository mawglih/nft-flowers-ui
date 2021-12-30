import React, { useState} from 'react';
import Layout from './ui/regular/Layout';
import List from './ui/regular/List';
import WalletBar from './ui/regular/WalletBar';
import './App.css';


const App = () => {
  const [value, setValue] = useState('');
  const onFormSubmit = e => {
      e.preventDefault();
      console.log('value is', value);
      // mint(value);
  }
  return (
    <Layout>
      <WalletBar />
      <div className="form-container">
        <form className="form-mint" onSubmit={e => onFormSubmit(e)}>
            <label>
                <span>Input text for minting</span>
                <input 
                    value={value}
                    onChange={e =>setValue(e.target.value)}
                    type="text"
                    name="kryptoText"                        />
            </label>
            <button className="form-button" type='submit'>Submit</button>
        </form>
    </div>
    <List/>
  </Layout> 
  );
}

export default App;
