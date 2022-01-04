import { useState } from "react";
import WalletBar from "./WalletBar";
import Form from "../common/form";
import List from "./List";
import Modal from "../common/modal";
import ModalOrder from "../common/modal/modalOrder";
import { useWallet } from "../../../hooks/web3";
import Breadcrumbs from "../common/breadcrumbs";


const Home = () => {
  const LINKS = [
    {
      href: "/",
      value: "Buy",
    },
        {
      href: "/owned",
      value: "My own NFT",
    },
        {
      href: "/allorders",
      value: "All orders",
    },
  ]

  const { canPurchase } = useWallet();
  
  
  const onFormSubmit = e => {
      e.preventDefault();
      // mint(value);
  }

  const [modalOpen, setModalOpen]= useState(null);

  const openModal  = item => {
    console.log('item in home', item);
    setModalOpen(item);
  }
  const modalClose = () => {
    console.log('close');
    setModalOpen(null);
  }
  
    return (
        <div className="home-container">
            <WalletBar />
            <Modal isOpen={modalOpen}>
              <ModalOrder obj={modalOpen} modalClose={modalClose}/>
            </Modal>
            <Breadcrumbs links={LINKS}/>
            <Form submit ={onFormSubmit}/>
            <List 
              openModal = {item => openModal(item)}
              canPurchase={canPurchase}
            />  
        </div>
    )
}
export default Home;
