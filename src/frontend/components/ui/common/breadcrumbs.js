import { NavLink } from "react-router-dom";

const Breadcrumbs = ({
  links, 
}) => {

  return (
    <>
    <nav className="breadcrumbs-container">
      <ol className="breadcrumbs-list">
        {links.map(item => {
          return(
            <li className="breadcrumbs-item" key={item.href}>
              <NavLink 
                to={item.href}
                className={({ isActive }) => isActive ? "active-breadcrumbs" : undefined}
                end
              >
                {item.value}
              </NavLink>
            </li>
          )
        })}
        
      </ol>
    </nav>
    
    </>
  )
}

export default Breadcrumbs;
