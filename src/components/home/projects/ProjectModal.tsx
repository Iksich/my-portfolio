import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import styles from './projectmodal.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement | null;

    if (body) {
      body.style.overflowY = isOpen ? 'hidden' : 'scroll';
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const content = (
    <div
      className={styles.modal}
      onClick={handleCloseModal}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Space') {
          handleCloseModal();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className={styles.closeModalBtn}>
        <MdClose />
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <img
          className={styles.modalImage}
          src={imgSrc}
          alt={`Project: ${title}`}
        />
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(' - ')}</div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links
              <span>.</span>
            </p>

            <div className={styles.links}>
              <a target="_blank" rel="nofollow noreferrer" href={code}>
                <AiFillGithub />
                {' '}
                source code
              </a>

              <a target="_blank" rel="nofollow noreferrer" href={projectLink}>
                <AiOutlineExport />
                {' '}
                live project
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(content, document.getElementById('root'));
};
