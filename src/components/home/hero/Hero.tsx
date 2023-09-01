import ReactTypingEffect from 'react-typing-effect';
import { Reveal } from '../../utils/Reveal';
import { DotGrid } from './DotGrid';
import styles from './hero.module.scss';
import { OutlineButton } from '../../buttons/OutlineButton';

const HeroTitle = () => (
  <Reveal>
    <h1 className={styles.title}>
      Hey, I&apos;m Ilija
      <span>.</span>
    </h1>
  </Reveal>
);

const HeroSubtitle = () => (
  <Reveal>
    <h2 className={styles.subTitle}>
      I&apos;m a <span>
        <ReactTypingEffect
          text={['Front-end Developer.', 'Freelancer.']}
          speed={40}
          eraseSpeed={40}
          eraseDelay={900}
          typingDelay={300}
        />
      </span>
    </h2>
  </Reveal>
);

const HeroCopy = () => (
  <Reveal>
    <p className={styles.aboutCopy}>
      Crafting meaningful websites that tell your story🎨
      <br />
      Let&apos;s connect!
    </p>
  </Reveal>
);

export const Hero = () => {
  const onClickContact = () => {
    const contactElement = document.getElementById('contact');

    if (contactElement) {
      contactElement.scrollIntoView();
    }
  };

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <HeroTitle />
        <HeroSubtitle />
        <HeroCopy />
        <Reveal>
          <OutlineButton onClick={onClickContact}>Contact me</OutlineButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
