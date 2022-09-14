import { Link } from "react-router-dom"


const Navbar = ({title}) =>{
    return (
        <nav>
            <Link to=".">
                <h1>{title}</h1>
            </Link>
            <div>
                <Link to="/products">Productos</Link>  
            </div>
        </nav>
    )
} 
export default Navbar;