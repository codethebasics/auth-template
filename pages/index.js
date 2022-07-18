import styles from "/styles/LoginPage.module.scss";

export default function Home() {
  return (
    <div className={styles.loginForm}>
      <label>Login</label>
      <input name="username" />
      <label>Password</label>
      <input name="password" />
      <button>Login</button>
    </div>
  );
}
