import '../../App.css'
const Button = ({
  children, 
  classname,
  ...rest
}) => {
  return (
    <button 
      {...rest}
      type="button" 
      className={`btn ${classname}`}
      >
      {children}
    </button>
  );
}        

export default Button;
