import { Link } from "react-router-dom";
import classes from "./index.module.css";
const Header = () => {
  return <nav className={classes.header}>
    
    <Link to="/products" className={classes.link}>A</Link>
  </nav>;
};
export default Header;
