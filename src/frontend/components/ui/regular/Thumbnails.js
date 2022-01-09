import { Thumbs } from "../../../utils/images";
import Button from "../common/button";

const Thumbnails = ({
  getLink
}) => {
  return (
    <div className="thumbs-container">
      <div className="thumbs-context">
        {
          Thumbs.map(item => {
            return (
              <div className="thumbs-card" key={item.id}>
                <img
                  src={item.src} 
                  alt={item.alt} 
                />
                <Button
                  onClick = {() => getLink(item.src)}
                  classname="thumbs-btn"
                >
                  Mint
                </Button>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Thumbnails;
