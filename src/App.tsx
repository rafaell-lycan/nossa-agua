import { useState, useEffect } from "react";

import styles from "./App.module.css";

import { Loader } from "./components/Loader";
import { Water } from "./components/Water";
import { Navigation } from "./components/Navigation";
import { getDamsInfo } from "./services/get-dams-info";
import { DamInfo } from "./components/DamInfo";
import { DamSystem } from "./@types";

const MIN_VIEWPORT_WIDTH = 640;

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dams, setDams] = useState<DamSystem[]>([]);
  const [selectedDam, setSelectedDam] = useState<DamSystem>();

  async function fetchDams() {
    const fetchedDams = await getDamsInfo();
    setDams(fetchedDams);
    setIsLoading(false);

    selectHashDam(fetchedDams);
  }

  function selectHashDam(dams: DamSystem[]) {
    if (!window.location.hash) return;

    const hash = window.location.hash.replace("#", "");
    const match = dams.find((dam) => dam.code === hash);

    if (match) setSelectedDam(match);
  }

  function handleSelectDam(dam?: DamSystem) {
    setSelectedDam(dam);
    setIsMobileMenuOpen(false);
  }

  function handleResize() {
    if (window.innerWidth >= MIN_VIEWPORT_WIDTH && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }

  function toggleIsMobileMenuOpen() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    fetchDams();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Loader show={isLoading} />
      {!isLoading && (
        <>
          <header className={styles.header}>
            <h1>
              <a href="#" onClick={() => handleSelectDam()}>
                Nossa Água - São Paulo
              </a>
            </h1>
            <div
              className={styles["header__menu-icon"]}
              onClick={toggleIsMobileMenuOpen}
            ></div>
          </header>
          <Water level={selectedDam?.totalAmount} />
          <section className={styles.ruler} />
          <Navigation
            selectedDam={selectedDam}
            dams={dams}
            onSelectDam={handleSelectDam}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <DamInfo selectedDam={selectedDam} />
          <footer className={styles.footer}>
            DADOS{" "}
            <a
              href="https://mananciais.sabesp.com.br/Situacao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/sabesp.png" alt="Sabesp Logo" />
            </a>
          </footer>
        </>
      )}
    </>
  );
}
