import { useState, useEffect } from "react";
import { uid } from "uid";
import { useAccount } from "../../../hooks/web3";
import { useWeb3 } from "../../providers";
import Form from "../common/form";
import SingleCard from "./SingleCard";
import Thumbnails from "./Thumbnails";

const Home = () => {


  const [kriptoFlow, setKriptoFlow] = useState([{contract: null, src: ''}]);
  const [totalSupply, setTotalSupply] = useState(0);
  const { account } = useAccount();
  const { contract, abis } = useWeb3();
  const getTotalSupply = async () => {
      try {
        const total = await contract.methods.totalSupply().call();
        setTotalSupply(total);
        for(let i = 1; i <= total; i++) {
          const kryptoFlow = await contract.methods.KryptoFlowz(i - 1).call();
          console.log('kryptoflow', i, kryptoFlow);
          setKriptoFlow([...kriptoFlow, {contract: abis}]);
        }
      } catch {
        console.log('cannot calculate')
      }
    }
  const mint =  async item => {
    const token = `${item}/${uid()}`;
    console.log('token', token);
    await contract.methods.mint(token).send({from: account.data})
      .once('receipt', receipt => {
      console.log('receipt', receipt);
      });
      
  }
    
    useEffect(() => {
      getTotalSupply();
    },[])

  const getLink = src => {
    console.log('src', src);
    mint(src);
    setKriptoFlow([...kriptoFlow,{contract: abis, src}]);

  }

  console.log('after minting', kriptoFlow);
  console.log('total supplu ', totalSupply);
  
  return (
      <div className="home-container">
  
          <h1>Some text about project</h1>
          <h2>How to install metamask</h2>
          <h3>How to work with minting</h3>
          <h4>Select image or provide link to image online in format "http://ling-to-image.png"</h4>
          <Form
            submit={(src) => getLink(src)}
          />
          <Thumbnails
            getLink={(src) => getLink(src)}
          />
          <hr className="hr-style"/>  
          <h1>Minted images</h1>
          {kriptoFlow && kriptoFlow.map((item, key) => {
            return (
              item.src && <SingleCard
                contract={item.contract}
                src={item.src}
                key={key}
                text="This is a minted image with contract"
              />
            )
          })}    
          </div>
  )
}
export default Home;
