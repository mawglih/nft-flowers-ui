import { useState } from "react";
import Button from "../button";

const defaultOrder = {
  price: "",
  email: "",
  confirmationEmail: "",
};

const ModalOrder = ({
    modalClass1,
    modalClose,
    obj = {}
}) => {

  const [order, setOrder] = useState();

  return (
    <div className={`modal-box ${modalClass1}`}>
      <div className="modal-flex">
        <div className="modal-top">
          <div className="modal-top-title">
            <div className="modal-title">
            <span className="title1">
              {`Do you want to purchase ${obj && obj.id}?`}
            </span>
            <span className="title2">
              {`Current price ${obj && obj.price}(eth)`}
            </span>
            <small>Price will be verified at the checkout</small>
          </div>
          </div>
          {obj && <div className="modal-image">
            <img src={obj.src} alt={obj.alt} />
          </div>}
        </div>
        <div className="modal-content">
          <div className="input-email">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email-field"
              placeholder="xyz@abc.com"
            />
          </div>
          <div className="modal-info">
            <small>Important to provide a correct email, otherwise the order cannot be verified</small>
          </div>
          <div className="input-email">
            <label>Repeat Email</label>
            <input
              type="email"
              name="confirmation"
              id="confirmation"
              className="email-field"
              placeholder="xyz@abc.com"
            />
          </div>
          <div className="modal-checkbox">
            <label>
              <input
                type="checkbox"
                className="checkbox-field"
              />
            </label>
            <span>I accept 1-800-flowers.com &apos;terms of service&apos; and I agree to pay the above price</span>
          </div>
        </div>
        <div className="modal-btn-container">
            <Button classname="btn btn-submit">
                Submit
            </Button>
            <Button
              classname="btn btn-cancel"
              onClick={modalClose}
            >
                Cancel
            </Button>
        </div>
      </div>
    </div>
  )
}

export default ModalOrder;
