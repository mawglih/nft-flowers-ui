import Button from "../common/button"

const SingleCard = ({
  src,
  contract,
  text
}) => {
  return (
    <div className="card-container">
      <div className="card-context">
        <div className="card-image">
          <img src={src}/>
        </div>
        <div className="card-text">
          {text}
        </div>
        <a href={contract}><Button classname="btn-connect">Download</Button></a>
      </div>
    </div>
  )
}

export default SingleCard;
