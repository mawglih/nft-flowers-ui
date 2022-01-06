import { useState } from 'react';
import { useWallet } from '../../../hooks/web3';
import {Images} from '../../../utils/images';
import Button from '../common/button';
import Modal from '../common/modal';
import ModalOrder from '../common/modal/modalOrder';


const List = () => {
  const { canPurchase } = useWallet();
  const [modalOpen, setModalOpen]= useState(null);

  const [order, setOrder] = useState({
    price: "",
    email: "",
    confirmationEmail: "",
    aggreeOnTerms: false,
  });

  const submitForm = async data => {
    console.log('order', data);
    setOrder({...data});
    modalClose();
  }
  
  const openModal  = item => {
    console.log('item in List clicked', item);
    setModalOpen(item);
  }
  const modalClose = () => {
    console.log('close');
    setModalOpen(null);
  }
  return (
    <>
      <div className="image-container">
        <div className='image-list'>
          {Images.map(item => {
            return (
              <div key={item.id} className='image-single'> 
                <img src={item.src} alt={item.alt} />
                <Button
                  classname='btn-purchase'
                  disabled={!canPurchase}
                  onClick={() => openModal(item)}
                >
                  Purchase me
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <Modal isOpen={modalOpen}>
        <ModalOrder obj={modalOpen} modalClose={modalClose} submitForm={submitForm} />
      </Modal>
    </>
    
  );
}

export default List;
