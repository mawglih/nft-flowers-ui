import {useAccount, useNetwork } from '../../../hooks/web3';
import { Link } from 'react-router-dom';
import { useEthPrice } from '../../../hooks/eth/useEthPrice';
import { useWeb3 } from '../../providers';
import EthRates from '../common/ethRates';
import { useState } from 'react/cjs/react.development';
import Button from '../common/button';

const WalletBar = () => {
    // const [totalSupply, setTotalSupply] = useState({});
    // const [kriptoFlow, setKriptoFlow] = useState([]);
    // const [ownerAddress, setOwnerAddress] = useState('');
    const [val, setVal] = useState('');
    const { account } = useAccount();
    const { network } = useNetwork();
    // const { contract: { data: myContract } } = useFlowContract();
    const {eth} = useEthPrice();
    const { requireInstall, contract } = useWeb3();
    console.log('account in Wallet', account);
    console.log('network in Wallet', network);
    console.log('contract in Wallet', contract);
    console.log('is it an adress? ', account.data);

    const mintForm = e => {
      e.preventDefault();
      // mint(val);
      setVal('');
    }

    // const mint =  async item => {
    //   console.log('+++++++++++++++++++++++++++++++++++++++++++++')
    //   console.log('item', item);
    //   console.log('from: ', account.data);
    //   console.log('+++++++++++++++++++++++++++++++++++++++++++++')
    //   await contract.methods.mint(item).send({from: account.data})
    //   .once('receipt', receipt => {
    //     console.log('receipt', receipt);
    //     // setKriptoFlow([...kriptoFlow, contract]);
    //   })
    // }

    // const getTotalSupply = async () => {
    //   try {
    //     const total = await contract.methods.totalSupply().call();
    //     setTotalSupply(total);
    //     for(let i = 1; i <= total; i++) {
    //       const kryptoFlow = await contract.methods.KryptoFlowz(i - 1).call();
    //       console.log('kryptoflow', i, kryptoFlow);
    //       setKriptoFlow([...kriptoFlow, kryptoFlow]);
    //     }
    //   } catch {
    //     console.log('cannot calculate')
    //   }
    // }
    // // const getTotalSupply = async () => {
    // //   const supp =  await methods.totalSupply().call();
    // //   setTotalSupply(supp);
    // // }

    
    // useEffect(() => {
    //   getTotalSupply();
    // }, [contract])

    // console.log('My total supply is:', totalSupply);
    // console.log('My kripto is :', kriptoFlow);
    // console.log('owner address is: ', allAddresses);
  return (
    <>
      <section className="wallet-container">
        <div className="wallet-context">
          <h1>Hello, {account.data ? account.data : "Anonymous person"}</h1>
          {/* {totalSupply && <h2>Your total in Contract is {totalSupply}</h2>} */}
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

    </>
    
  )
}

export default WalletBar;
