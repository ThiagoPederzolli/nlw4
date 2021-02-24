import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ThiagoPederzolli.png" alt="Imagem de perfil do Thiago Pederzolli no github"/>
      <div>
        <strong>Thiago Pederzolli</strong>
        <p>
          <img src="icons/level.svg" alt="icone da seta de level up"/>
          Level 1</p>
      </div>
    </div>
  )
}