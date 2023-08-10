import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BsTelegram, BsDiscord } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./headinglinks.module.scss";

type MotionLinkProps = {
  href: string;
  icon: React.ReactNode;
  delay: number;
};

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <MotionLink
        href="https://www.github.com/iksich"
        icon={<AiFillGithub size="2.4rem" />}
        delay={0.1}
      />
      <MotionLink
        href="https://discordapp.com/users/503152077824851968"
        icon={<BsDiscord size="2.4rem" />}
        delay={0.1}
      />
      <MotionLink
        href="https://t.me/Iksich"
        icon={<BsTelegram size="2.4rem" />}
        delay={0.1}
      />
      <MotionLink
        href="https://www.linkedin.com/in/ilija-pejanovic-4a3683243/"
        icon={<FaLinkedin size="2.4rem" />}
        delay={0.2}
      />
      <MotionLink
        href="https://www.instagram.com/_ilija_p"
        icon={<AiOutlineInstagram size="2.4rem" />}
        delay={0.3}
      />
    </div>
  );
};

const MotionLink: React.FC<MotionLinkProps> = ({ href, icon, delay }) => {
  return (
    <motion.span
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <a href={href} target="_blank" rel="nofollow noreferrer" >
        {icon}
      </a>
    </motion.span>
  );
};


