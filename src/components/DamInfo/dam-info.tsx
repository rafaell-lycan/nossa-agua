import { DamSystem } from "../../@types";
import styles from "./dam-info.module.css";

type Props = {
  selectedDam?: DamSystem;
};

export const DamInfo = ({ selectedDam }: Props) => {
  function getShareOnFacebookLink() {
    const params = new URLSearchParams();
    params.set("display", "page");
    params.set("u", location.href);
    return new URL(
      `https://www.facebook.com/sharer/sharer.php?${params.toString()}`
    ).toString();
  }

  function getShareOnTwitterLink() {
    const params = new URLSearchParams();
    params.set(
      "text",
      `Nível do sistema ${selectedDam?.name} hoje: ${selectedDam?.totalAmount}% \n\n${location.href}\n#nossaaguasp`
    );
    return new URL(
      `https://twitter.com/intent/tweet?${params.toString()}`
    ).toString();
  }

  if (!selectedDam) {
    return (
      <div className={styles.instructions}>
        <h3>Escolha uma das represas ao lado</h3>
      </div>
    );
  }

  return (
    <section className={styles.content}>
      <h3>sistema</h3>
      <h2>{selectedDam.name}</h2>
      <div className={styles.indicator}>
        <span className={styles.pct}>
          {selectedDam.totalAmount}
          <strong>%</strong>
        </span>
        <span className={`${styles.icon} ${styles.rain}`}>
          hoje <br />
          {selectedDam.dailyAmount}
        </span>
        <a
          className={`${styles.icon} ${styles.share} ${styles.facebook}`}
          href={getShareOnFacebookLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Compartilhar
        </a>
        <a
          className={`${styles.icon} ${styles.share} ${styles.twitter}`}
          href={getShareOnTwitterLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweetar
        </a>
      </div>
    </section>
  );
};
