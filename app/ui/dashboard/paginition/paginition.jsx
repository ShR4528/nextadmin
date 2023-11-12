import styles from './paginition.module.css';

const Paginition = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        Previuos
      </button>
      <button className={styles.button}>Next</button>
    </div>
  );
};

export default Paginition;
