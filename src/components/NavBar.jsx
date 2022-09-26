import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget";


const Navbar = ({title}) =>{
    return (
        <nav>
            <Link to=".">
                <h1>{title}</h1>
            </Link>
            <Container display='flex' flexDirection='row' justifyContent='space-evenly'>
                <Link to="/products">Productos</Link>  
                <CartWidget/>
            </Container>
        </nav>
    )
} 
export default Navbar;