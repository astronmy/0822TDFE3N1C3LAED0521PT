import CustomButton2 from "./CustomButton2";


const CustomButton = ({ funcion}) => {

  return (
      <>
        <h2>Boton Custom</h2>
        <button onClick={funcion}>Seleccionar </button>
        <CustomButton2 funcionNieto={funcion}/>
      </>
  )

}
export default CustomButton;