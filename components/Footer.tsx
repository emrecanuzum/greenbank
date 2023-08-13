import React from "react";
import Image from 'next/image'
import styles from "../styles/Footer.module.css"

import phone from "../public/images/footer/phone.png"
import appstore from "../public/images/footer/appstore.png"
import googleplay from "../public/images/footer/googleplay.png"
import logo from "../public/images/footer/logo.png"

export default function Footer() {
  return (
    <div className={styles.footerUpside}>
      <div className={styles.footerDownload}>
        <h1>Easy Way to manage your finances</h1>
        <p>Easy to use mobile app that support on android and ios.</p>
        <div className={styles.buttons}>
          <a
            href="https://link-to-your-appstore-download"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            <Image
              alt="appstore"
              src={appstore}
              quality={100}
            />
          </a>
          <a
            href="https://link-to-your-googleplay-download"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            <Image
              alt="googleplay"
              src={googleplay}
              quality={100}
            />
          </a>
        </div>
      </div>
      <div className={styles.footerPhones}>
        <Image
          alt="phone"
          src={phone}
          quality={100}
        />
      </div>
    </div>
  );
}
