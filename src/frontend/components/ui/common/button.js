import '../../App.css'
const Button = ({
  children, 
  classname,
  type,
  ...rest
}) => {
  return (
    <button 
      {...rest}
      type={type} 
      className={`btn ${classname}`}
      >
      {children}
    </button>
  );
}        

export default Button;
