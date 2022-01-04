import { useState } from 'react';
import {Images} from '../../../utils/images';
import Button from '../common/button';

const List = ({
    openModal,
    canPurchase,
}) => {
  
    return (
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
    )
}

export default List;
