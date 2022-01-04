import { Route, Switch, useRouteMatch } from "react-router-dom";
import AllOrders from "../regular/AllOrders";
import OwnedNFT from "../regular/OwnedNFT";
import ActiveLink from "./activeLink";

const Breadcrumbs = ({
  links
}) => {

  let { path, url } = useRouteMatch();

  return (
    <>
    <nav className="breadcrumbs-container">
      <ol className="breadcrumbs-list">
        {links.map(item => {
          return(
            <li className="breadcrumbs-item" key={item.href}>
              <ActiveLink href={url+item.href}>
                <a>
                  {item.value}
                </a>
              </ActiveLink>
            </li>
          )
        })}
        
      </ol>
    </nav>
    </>
  )
}

export default Breadcrumbs;
