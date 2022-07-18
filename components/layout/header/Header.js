import styles from "/styles/Header.module.scss";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>Header</div>
      <div className={styles.brand}>Links</div>
    </div>
  );
}
