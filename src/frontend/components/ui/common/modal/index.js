const Modal = ({
    isOpen,
    children
}) => {
  console.log('modal is open', isOpen)
  return (
    <section>
      <div className={`${!isOpen && "hidden"} modal-container"`} role="dialog">
        <div className="modal-context">
          { isOpen &&
            <div className="modal-bkg"></div>
          }
          <span className="">&#8203;</span>
          
          {children}
        </div>
      </div>
    </section>
  )
}

export default Modal;