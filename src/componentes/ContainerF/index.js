import Heroe from "../Heroe";


const ContainerF = ({ data, titulo }) => {

  return (
    <>
      <div className="container">
        <h2>{titulo}</h2>
        {
          data.map( (heroe) => <Heroe key={heroe.id} nombre={heroe.name} editorial={heroe.origin} />)
        }
      </div>
    </>
  )

}
export default ContainerF;