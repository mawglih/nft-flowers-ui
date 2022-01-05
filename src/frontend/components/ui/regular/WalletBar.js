import {useAccount, useNetwork } from '../../../hooks/web3';
import { Link } from 'react-router-dom';
import { useEthPrice } from '../../../hooks/eth/useEthPrice';
import { useWeb3 } from '../../providers';
import EthRates from '../common/ethRates';

const WalletBar = () => {
    const { account } = useAccount();
    const { network } = useNetwork();
    const {eth} = useEthPrice();

    console.log('eth: ', eth.data);
    const { requireInstall } = useWeb3();
    console.log('account in Wallet', account);
    console.log('network in Wallet', network);
  return (
    <section className="wallet-container">
      <div className="wallet-context">
        <h1>Hello, {account.data ? account.data : "Anonymous person"}</h1>
        <div className="purchase-container">
            <span type="button" className="btn btn-connect"><Link to="/"  className="purchase-link">
            Learn how to purchase
            </Link></span>
        <div>
            {requireInstall ? (
                <div className="require-install"><h5>Please install Metamask</h5></div>
            ) : (
                <div>
                <div><span>Currently on </span><strong>{network.data}</strong></div>
            {(!network.isLoading && !network.isSupported) ? (
            <div className='wrong-network'>
                <h4>Connected to wrong network <br />{`Please connect to ${network.target}`}</h4>
            </div>
            ) : null}
            </div>
            )}
        </div>
        </div>
        <div className='eth-rates-container'>
              <EthRates eth={eth.data} dol={(1 / eth.data).toFixed(6)}/>
        </div>
      </div>
    </section>
  )
}

export default WalletBar;
