import { Reveal } from "../../utils/Reveal";
import { SectionHeader } from "../../utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              <span>Hi</span> there! My name is Ilija Pejanovic, and I&apos;m a talented and motivated Front-end Developer seeking
              an opportunity to apply my expertise. Eager to
              embrace new challenges and expand my knowledge.
              Experienced in utilizing HTML, Bootstrap, CSS, SCSS,
              JavaScript, TypeScript, and React in development
              projects.
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};