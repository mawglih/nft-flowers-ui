import {useAccount } from '../../../hooks/web3/useAccount';
const WalletBar = () => {
    const { account } = useAccount();
  return (
    <section className="wallet-containser">
      <div className="wallet-context">
        <h1>Hello, {account.data}</h1>
        <h2>I hope you are having a great day!</h2>
            <div className="purchase-container">
              <a href="#" className="purchase-link">
                Learn how to purchase
              </a>
          <div>
            <div><span>Currently on </span><strong>Ethereum Main Network</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalletBar;
