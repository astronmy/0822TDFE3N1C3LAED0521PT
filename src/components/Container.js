
import React from 'react'
import { getPokemonesByType, getRandomPokemon } from '../data/pokemones';
import styles from '../styles/container.module.css'
import Pokemon from './Pokemon'

const pokemonPortada = getRandomPokemon();

export default class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      portada: pokemonPortada.avatar,
      name: pokemonPortada.name,
      pokemones: [],
      type: 'rock'
    }
  }

  getData = () => {
    this.setState({
      pokemones: getPokemonesByType(this.state.type)
    }) 
  }

  deletePokemon = () => {
    const aux = this.state.pokemones;
    const pokemon = aux.pop();
    console.log(pokemon)
    this.setState({
      pokemones: this.state.pokemones.filter( (item) => item.id !== pokemon.id)
    }) 
  }

  componentDidMount(){
    this.getData();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.type !== prevState.type){
      console.log("cambio el estado")
      this.getData();
    }
    //this.getData();
  }

  cambiarTipo = () =>{
    this.setState({
      type: 'fire'
    });
  }

  cambiarPortada = (name, image) => {
    this.setState({
      portada: image,
      name
    });

  }

  render() {
    return (
      <>
        <h2 className={styles.title}>{this.props.title}</h2>
        <img className={styles.portada} src={this.state.portada} alt="imagen principal" />
        <h4 className={styles.subtitle}>
            Un <span className={styles.wild}>{this.state.name}</span> salvaje a aparecido
        </h4>
        <button onClick={this.cambiarTipo}>Cambio</button>
        <button onClick={this.deletePokemon}>quitar</button>
        <div className={styles.container}>
          { this.state.pokemones.map((pokemon) => <Pokemon key={(pokemon.id)} name={pokemon.name} avatar={pokemon.avatar} type={pokemon.type} actualizar={this.cambiarPortada} />) }
        </div>
      </>
    )
  }
};