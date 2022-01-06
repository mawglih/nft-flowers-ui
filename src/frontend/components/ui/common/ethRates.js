import '../../App.css';
import Loader from './loader';

const EthRates = ({
    eth,
    dol
}) => {

  return (
    <div className="rates-container">
      { eth && eth.data ?
      <Loader /> :
      (<>
        <div>
          <p className='rates-title'>Current ETH Price (USD)</p>
          <p className='rates-title'>Current USD Price (ETH)</p>
          </div>
          <div>
          <p className='rates-price'>1 ETH = {eth}$</p>
          <p className='rates-price'>1 $ = {dol} ETH</p>
        </div>
      </>
      )}
    </div>
  )
}

export default EthRates;
