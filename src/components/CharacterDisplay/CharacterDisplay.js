import React from 'react';
import styles from './CharacterDisplay.css'

const CharacterDisplay = (props) => {
  const { character } = props;

  const handlerClick = (item) => item.target.remove();

  return (
    character.split('').map((item, index) => {
      return <div onClick={(item) => handlerClick(item)} key={index} character={item} className={`characterDisplay ${styles.component}`}>{ item }</div>
    })
  )
}

export default CharacterDisplay;
