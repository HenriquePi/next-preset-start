
import Image from 'next/image';
import styles from './Footer.module.scss';

import LinkedIn from '@/assets/icons/linkedin-in.svg';
import GitHub from '@/assets/icons/github.svg';
import Phone from '@/assets/icons/phone-solid.svg';
import Message from '@/assets/icons/message-solid.svg';
import Email from '@/assets/icons/envelope-solid.svg';

export const Footer = () => {
  return (
    <footer className={styles.wrapper} id="contact">
      <div className={styles.contacts}>
        <a href={process.env.NEXT_PUBLIC_URL_LINKEDIN}>
          <Image src={LinkedIn} alt="LinkedIn Icon" height={25} width={25}/>
          <h3>LinkedIn</h3>
        </a>
        <a href={process.env.NEXT_PUBLIC_URL_GITHUB}>
          <Image src={GitHub} alt="GitHub Icon" height={25} width={25}/>
          <h3>GitHub</h3>
        </a>
        <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}>
          <Image src={Phone} alt="Phone Icon" height={25} width={25}/>
          <h3>Call</h3>
        </a>
        <a href={`sms:${process.env.NEXT_PUBLIC_PHONE}`}>
          <Image src={Message} alt="Message Icon" height={25} width={25}/>
          <h3>Text</h3>
        </a>
        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
          <Image src={Email} alt="Email Icon" height={25} width={25}/>
          <h3>Email</h3>
        </a>

      </div>
    </footer>
  );
};