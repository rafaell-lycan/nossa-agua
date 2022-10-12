import styles from "./water.module.css";

const MAX_LEVEL = 100;
const DEFAULT_LEVEL = 50;

type Props = {
  level?: string;
};
export const Water = ({ level }: Props) => {
  function convertWaterPercentageLevel(level: string) {
    return MAX_LEVEL - parseFloat(level);
  }

  return (
    <section
      className={styles.water}
      style={{
        top: `${level ? convertWaterPercentageLevel(level) : DEFAULT_LEVEL}%`,
      }}
    ></section>
  );
};
