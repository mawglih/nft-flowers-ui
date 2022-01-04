import { cloneElement } from "react";
import { Link } from "react-router-dom";
const ActiveLink = ({
  children,
  ...props
}) => {

  let className = children.props.className || ""
  return  (
    <Link>
      {
        cloneElement(children, {className})
      }
    </Link>
  )
}
export default ActiveLink;
