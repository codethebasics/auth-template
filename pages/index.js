import { useState } from "react";
import styles from "/styles/LoginPage.module.scss";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [revealPassword, setRevealPassword] = useState(false);

  const clear = () => {
    setUsername("");
    setPassword("");
  };

  const toggleRevealPassword = () => {
    setRevealPassword(!revealPassword);
  };

  const renderEyeIcon = () => {
    return revealPassword ? (
      <img height={17} src="/img/opened-eye.svg" />
    ) : (
      <img height={20} src="/img/closed-eye.svg" />
    );
  };
  return (
    <div className={styles.loginForm}>
      <div className={styles.logoWrapper}>
        <img width="120" src="/img/key.svg" />
      </div>
      <label>Login</label>
      <div className={styles.inputWrapper}>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span onClick={clear}>
          {username || password ? (
            <img height={25} src="/img/times.svg" />
          ) : (
            <></>
          )}
        </span>
      </div>
      <label>Password</label>
      <div className={styles.inputWrapper}>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={revealPassword ? "text" : "password"}
        />
        <span onClick={toggleRevealPassword}>{renderEyeIcon()}</span>
      </div>
      <button>Enter</button>
    </div>
  );
}
