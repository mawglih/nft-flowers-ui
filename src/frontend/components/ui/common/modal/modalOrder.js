import { useState, useEffect } from "react";
import { useEthPrice } from "../../../../hooks/eth/useEthPrice";
import Button from "../button";

const defaultOrder = {
  price: "",
  email: "",
  confirmationEmail: "",
  aggreeOnTerms: false
};

  const _createFormState = (isDisabled = false, message = '') => ({ isDisabled, message });
  const createFormState = ({ price, email, confirmationEmail, aggreeOnTerms }) => {
    if(!price || Number(price) <= 0) {
      return _createFormState(true, "Price is not valid. Check the price and submit again.")
    }
    else if(email.length === 0 || confirmationEmail.length === 0) {
      return _createFormState(true)
    }
    else if(email !== confirmationEmail) {
      return _createFormState(true, "Email and confirmation email do not match!")
    }
    else if(!aggreeOnTerms) {
      return _createFormState(true, "Please check that you agree on terms and conditions!")
    }
    return _createFormState();
  }

const ModalOrder = ({
    modalClass1,
    modalClose,
    submitForm,
    obj = {}
}) => {

  const [order, setOrder] = useState(defaultOrder);
  const setOnChange = ({target: {value, name}}) => setOrder({...order, [name]: value.trim() });
    const setOnChecked = (e) => {
    console.log("checked event is",e)
    setOrder({...order, aggreeOnTerms: e.target.checked})
  };
  // const setOnChecked = ({target: {checked}}) => {setOrder({...order, aggreeOnTerms: checked})};
  const onFormSubmit = e => {
    e.preventDefault();
    console.log('the order is', order);
    submitForm(order);
    setOrder(defaultOrder);
  }
  // const { eth } = useEthPrice();
  const formState = createFormState(order);
  useEffect(() => {
    if(obj) {
    setOrder({
      ...defaultOrder,
      price: obj.price,     
    })
  }
  }, [obj])

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
        <form onSubmit={onFormSubmit}>
          <div className="modal-content">
            <div className="input-email">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="email-field"
                placeholder="xyz@abc.com"
                onChange = {setOnChange}
              />
            </div>
            <div className="modal-info">
              <small>Important to provide a correct email, otherwise the order cannot be verified</small>
            </div>
            <div className="input-email">
              <label>Repeat Email</label>
              <input
                type="email"
                name="confirmationEmail"
                id="confirmationEmail"
                className="email-field"
                placeholder="xyz@abc.com"
                onChange = {setOnChange}
              />
            </div>
            <div className="modal-checkbox">
              <label>
                <input
                  type="checkbox"
                  className="checkbox-field"
                  name="aggreeToTerms"
                  onChange={setOnChecked}
                />
              </label>
              <span>I accept 1-800-flowers.com &apos;terms of service&apos; and I agree to pay the above price</span>
            </div>
              {formState.message && (
                <div className="message-form">
                  <span>{formState.message}</span>
                </div>
              )}
          </div>
          <div className="modal-btn-container">
            <Button 
              classname="btn btn-submit" 
              type="submit"
              disabled={formState.isDisabled}
            >
              Submit
            </Button>
            <Button
              classname="btn btn-cancel"
              onClick={modalClose}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalOrder;
