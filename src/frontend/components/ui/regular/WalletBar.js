import {useAccount } from '../../../hooks/web3/useAccount';
import { useNetwork } from '../../../hooks/web3/useNetwork';
const WalletBar = () => {
    const { account } = useAccount();
    const { network } = useNetwork();
    console.log('account in Wallet', account);
    console.log('network in Wallet', network);
  return (
    <section className="wallet-container">
      <div className="wallet-context">
        <h1>Hello, {account.data}</h1>
        <h2>I hope you are having a great day!</h2>
        <div className="purchase-container">
            <span type="button" className="btn btn-connect"><a href="#"  className="purchase-link">
            Learn how to purchase
            </a></span>
        <div>
            <div><span>Currently on </span><strong>{network.data}</strong></div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default WalletBar;
