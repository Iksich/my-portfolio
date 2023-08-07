import { useState, useRef } from "react";
import { Reveal } from "../../utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OutlineButton } from "../../buttons/OutlineButton";

export const Contact = () => {
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_8guehy6', 'template_r6u1a4v', form.current!, 'HOVEDFq5g8I7E-j3n')
      .then((_result) => {
        toast.success('Message sent!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setMessage('');
        form.current!.reset();
      }, (_error) => {
        toast.error('Something went wrong', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <ToastContainer />
      <section className="section-wrapper" id="contact">
        <div className={styles.contactWrapper}>
          <Reveal width="100%">
            <h4 className={styles.contactTitle}>
              Contact<span>.</span>
            </h4>
          </Reveal>
          <Reveal width="100%">
            <p className={styles.contactCopy}>
              Shoot me an email if you want to connect! You can also find me on{" "}
              <a
                href="https://www.instagram.com/_ilija_p/"
                target="_blank"
                rel="nofollow"
              >
                Instagram
              </a>{" "}
              or{" "}
              <a href="https://www.linkedin.com/in/ilija-pejanovic-4a3683243/" target="_blank" rel="nofollow">
                LinkedIn
              </a>{" "}
              if that&apos;s more your speed.
            </p>
          </Reveal>
          <Reveal width="100%">
            <a href="mailto:ilija.pejanovicc@gmail.com">
              <div className={styles.contactEmail}>
                <AiFillMail size="2.4rem" />
                <span>ilija.pejanovicc@gmail.com</span>
              </div>
            </a>
          </Reveal>
          <Reveal width="100%">
            <form autoComplete="false" className={styles.contantForm} ref={form} onSubmit={sendEmail}>
              <div className={styles.inputBox}>
                <input type="text" placeholder="Full Name" autoComplete="false" name="to_name" required />
                <input type="email" placeholder="Email Address" autoComplete="false" name="from_name" required />
              </div>
              <textarea placeholder="Your Message"
                autoComplete="false"
                required
                name="message"
                value={message}
                onChange={handleMessageChange}></textarea>
                <br /><br />
              <OutlineButton>
                Send Message
              </OutlineButton>
            </form>

          </Reveal>
        </div>
      </section>
    </>
  );
};
