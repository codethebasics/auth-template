import styles from "/styles/LoginPage.module.scss";

export default function Home() {
  return (
    <div className={styles.loginForm}>
      <h1>Welcome</h1>
      <label>Login</label>
      <input name="username" />
      <label>Password</label>
      <input name="password" />
      <button>Login</button>
    </div>
  );
}
