
const Heroe = ({nombre, editorial }) => {

if(editorial == "Marvel"){
  return (
      <h4>Aguante DC</h4>
  )
}

    return (
          <>
              <h4>{nombre}</h4>
              <small>{editorial}</small>
          </>

    )
};
export default Heroe;