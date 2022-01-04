const ModalAccount = ({
    modalClass1,
    nftTitle,
}) => {
    return (
        <div className={`modal-box ${modalClass1}`}>
              <div className="modal-flex">
                  <div className="modal-top">
                <div className="svg-container">
                  <svg className="svg-modal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="modal-title">
                  <h3 className="" id="modal-title">
                    {`Do you want to purchase ${nftTitle}?`}
                  </h3>
                  </div>
                  </div>
                  <div className="modal-text">
                    
                  </div>
                <div className="modal-btn-container">
                    <button type="button" className="btn btn-modal-1">
                        Deactivate
                    </button>
                    <button type="button" className="btn btn-modal2">
                        Cancel
                    </button>
                </div>
              </div>
          </div>
    )
}

export default ModalAccount;
