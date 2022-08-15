import React from 'react'
import styles from '../../styles/pokemon.module.css'
import styled, {css} from 'styled-components'

const Pokemon = ({ name, avatar, type }) => {

  const setTimeTransition = (time) => `all ${time} ease-in-out`;

  const H4Pokemon = styled.h4`
    font-size: 3rem;
    color: ${(props) => (props.color ? props.color : '#000')};
    color: ${({color}) => (color ? color : '#000')};
    text-align: center;
    transition: ${setTimeTransition('1s')};
    &:hover{
      color: blue;
    }
    ${(props) => props.isBorder && css`
      border: 2px solid blue;
      border-radius: 10%;
      padding: 0.5rem;
    ` }
  `;

  return (
    <div className={styles.card}>
      <figure>
        <img src={avatar} className={styles.card__image} />
      </figure>
      <H4Pokemon isBorder={false}>{name}</H4Pokemon>
    </div>
  )
}
export default Pokemon;