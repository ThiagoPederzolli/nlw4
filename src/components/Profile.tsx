import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ThiagoPederzolli.png" alt="Imagem de perfil do Thiago Pederzolli no github"/>
      <div>
        <strong>Thiago Pederzolli</strong>
        <p>
          <img src="icons/level.svg" alt="icone da seta de level up"/>
          Level {level}</p>
      </div>
    </div>
  )
}