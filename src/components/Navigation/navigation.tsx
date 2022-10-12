import { DamSystem } from "../../@types";
import styles from "./navigation.module.css";

type Props = {
  dams: DamSystem[];
  selectedDam?: DamSystem;
  isMobileMenuOpen?: boolean;
  onSelectDam: (dam: DamSystem) => void;
};

export const Navigation = ({
  dams,
  selectedDam,
  isMobileMenuOpen,
  onSelectDam,
}: Props) => (
  <nav
    className={`${styles.nav} ${isMobileMenuOpen && styles["nav--is-open"]}`}
  >
    <ul>
      {dams.map((dam) => (
        <li key={dam.code}>
          <a
            href={`#${dam.code}`}
            className={
              dam.code === selectedDam?.code ? styles["is-active"] : ""
            }
            onClick={() => onSelectDam(dam)}
          >
            {dam.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
