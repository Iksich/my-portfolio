import { useEffect, useRef, useState } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { Reveal } from '../../utils/Reveal';
import { ProjectModal } from './ProjectModal';
import styles from './projects.module.scss';

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsOpen(true);
            }
          }}
          className={styles.projectImage}
        >
          <img
            src={imgSrc}
            alt={`Project: ${title}`}
            width={660}
            height={300}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />

              <a href={code} target="_blank" rel="noopener noreferrer">
                <AiFillGithub size="2.8rem" />
              </a>

              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <AiOutlineExport size="2.8rem" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(' - ')}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description}
              {' '}
              <span
                onClick={() => setIsOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setIsOpen(true);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                Learn more
                {'>'}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
