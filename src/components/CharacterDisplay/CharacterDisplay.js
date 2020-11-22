import React from 'react';
import styles from './CharacterDisplay.module.css'

const CharacterDisplay = (props) => {
  const { character, clicked } = props;

  return (
    <div onClick={ clicked } className={`characterDisplay ${styles.component}`}>{ character }</div>
  )
}

export default CharacterDisplay;
