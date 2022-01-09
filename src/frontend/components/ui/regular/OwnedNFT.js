import SingleCard from "./SingleCard";

const OwnedNFT = ({
  arrContracts
}) => {
  return (
    <div>
      <h1>Owned NFT</h1>
      {/* {arrContracts && arrContracts.map((item, key) => {
        return <SingleCard src={item.src} key={key} contract={item.contract}/>
      })} */}
    </div>
  )
}

export default OwnedNFT;
