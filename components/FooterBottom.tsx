import React from "react";
import Image from 'next/image'
import styles from "../styles/FooterBottom.module.css"

import logo from "../public/images/footer/logo.png"

export default function Footer() {
  return (
    <div className={styles.footerBlur}>
        <div className={styles.footerRow}>
            <div className={styles.footerColumn}>
                <Image
                  alt="phone"
                  src={logo}
                  quality={100}
                />
                <p>Discover the power of our secure and rewarding credit cards</p>
            </div>
            <div className={styles.footerSections}>
                <div className={styles.footerColSection}>
                    <h3>About Us</h3>
                    <a href='.'>Investors</a>
                    <a href='.'>Features</a>
                    <a href='.'>Book a demo</a>
                    <a href='.'>Security</a>
                </div>
                <div className={styles.footerColSection}>
                    <h3>Products</h3>
                    <a href='.'>Credit Cards</a>
                    <a href='.'>Gift Cards</a>
                    <a href='.'>Savings accounts</a>
                    <a href='.'>NFT</a>
                </div>
                <div className={styles.footerColSection}>
                    <h3>Useful Links</h3>
                    <a href='.'>Free rewards</a>
                    <a href='.'>Documentation</a>
                    <a href='.'>Affiliate program</a>
                </div>
                <div className={styles.footerColSection}>
                    <h3>Social</h3>
                    <a href='.'>Changelog</a>
                    <a href='.'>License</a>
                    <a href='.'>Site Maps</a>
                    <a href='.'>News</a>
                </div>
            </div>
        </div>
        <div className={styles.footerBottomText}>
            <p>copyright 2023 DoraDesign All Rights Reserved</p>
            <p>This page uses cookies. See cookies details<a href=''> here </a></p>
        </div>
    </div>
  );
}
