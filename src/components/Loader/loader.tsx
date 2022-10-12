import { useState, useEffect } from "react";

import styles from "./loader.module.css";

type Props = {
  show: boolean;
};

export const Loader = ({ show }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible && !show) {
      setTimeout(() => setIsVisible(false), 1000);
    }
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.preload} ${!show && styles["preload--hidden"]}`}>
      <div className={styles.preload__container}>
        <img src="/assets/images/logo.png" alt="Loading..." />
        <div className={styles.preload__loader}>Loading...</div>
      </div>
    </div>
  );
};
