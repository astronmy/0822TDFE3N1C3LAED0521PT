
import React, { useState } from 'react'
import Pokemon from '../Pokemon';
import styles from '../../styles/container.module.css'
import { getRandomPokemon } from '../../data/pokemones';

const randomPokemon = getRandomPokemon();

const Container = ({data , title}) => {
  console.log(randomPokemon)
  const [imagen, setImagen] = useState(randomPokemon.avatar)

  const changeImage = (avatar, name) => {
    alert(name);
    setImagen(avatar)
  }
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.principal} src={imagen} alt="imagen principal" />
      <div className={styles.container}>
        {
          data.map((pokemon) => <Pokemon key={(pokemon.id)} name={pokemon.name} avatar={pokemon.avatar} type={pokemon.type} choose={changeImage} />)
        }
      </div>
    </>
  )
};

export default Container;

