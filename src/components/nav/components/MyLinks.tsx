import styles from "./headinglinks.module.scss";
import {
  AiFillGithub,
  AiOutlineInstagram
} from "react-icons/ai";
import { BsTelegram, BsDiscord } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a href="https://www.github.com/iksich" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </a>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a href="https://discordapp.com/users/503152077824851968" target="_blank" rel="nofollow">
          <BsDiscord size="2.4rem" />
        </a>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a href="https://t.me/Iksich" target="_blank" rel="nofollow">
          <BsTelegram size="2.4rem" />
        </a>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="https://www.linkedin.com/in/ilija-pejanovic-4a3683243/" target="_blank" rel="nofollow">
          <FaLinkedin size="2.4rem" /> 
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a href="https://www.instagram.com/_ilija_p" target="_blank" rel="nofollow">
          <AiOutlineInstagram size="2.4rem" />
        </a>
      </motion.span>
    </div>
  );
};
