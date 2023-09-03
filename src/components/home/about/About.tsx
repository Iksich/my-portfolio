import { Reveal } from '../../utils/Reveal';
import { SectionHeader } from '../../utils/SectionHeader';
import styles from './about.module.scss';
import { Stats } from './Stats';

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              <span>Hi</span>
              there! My name is Ilija Pejanovic,
              and I&apos;m an aspiring Front-end Developer with a foundation in HTML,
              Bootstrap, CSS, SCSS, JavaScript, TypeScript, and React.
              Eager to apply my skills and learn while working on real-world projects.
              Committed to staying current with industry trends
              and delivering high-quality solutions.
              Ready to contribute to exceptional digital experiences in an entry-level role.
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
