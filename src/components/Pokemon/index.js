import React from 'react'
import styles from '../../styles/pokemon.module.css'

const Pokemon = ({ name, avatar:image, type, choose }) => {
  
  return (
    <div className={styles.card}>
      <figure>
        <img src={image} className={styles.card__image} alt={name} />
      </figure>
      <h4>{name}</h4>
      <button onClick={() => choose(image, name)} className={styles.btn}>Yo te elijo!</button>
    </div>
  )
}
export default Pokemon;