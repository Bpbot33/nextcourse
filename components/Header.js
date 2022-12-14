import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={styles.description}>
        Keep up to date with the latest news about web development
      </p>
    </div>
  );
}
