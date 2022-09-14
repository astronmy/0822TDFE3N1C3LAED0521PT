import { Link } from "react-router-dom";
import styles from "../styles/products.module.css"


const Product = ({title, thumbnail, permalink, id}) => {


  return (
      <div className={styles.product}>
        <img src={thumbnail} alt={title} />
        <h4>{title}</h4>
        <a href={permalink} target="_blank">Ver en MP</a>
        <Link to={`/products/${id}`}> Ver Detalle</Link>
      </div>
  )

}
export default Product;