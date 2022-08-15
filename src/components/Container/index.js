
import React from 'react'
import Pokemon from '../Pokemon';
import styles from '../../styles/container.module.css'

const Container = ({data , title}) => {

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {
          data.map((pokemon) => <Pokemon key={(pokemon)} name={pokemon.name} avatar={pokemon.avatar} type={pokemon.type} />)
        }
      </div>
    </>
  )
};

export default Container;

