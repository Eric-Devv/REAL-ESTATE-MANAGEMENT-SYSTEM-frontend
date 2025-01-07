import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar (){

return(
<div >
       <header className={styles.header}>
        
       <nav>
           
       <ul>
               
              
               <li ><a href="/">Real Estate Management</a></li>
               <li><Link to="/"> Home </Link> </li>
               <li> <Link to="/add-property"> new property </Link></li>
               
               

              
               
       </ul>

       </nav>

  
   </header>    
       
    </div>

)



}

export default Navbar