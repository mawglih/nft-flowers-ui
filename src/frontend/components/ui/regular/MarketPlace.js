import List from "./List";

const MarketPlace = ({
  openModal,
  canPurchase,
}) => {
  return (
    <>
      <List 
        openModal = {item => openModal(item)}
        canPurchase={canPurchase}
      />  
    </>
  )
}

export default MarketPlace;
