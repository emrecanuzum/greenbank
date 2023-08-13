import React from "react";
import Image from 'next/image'

import sign from "../public/images/testimonials/tag.png"
import hadid from "../public/images/testimonials/hadid.png"
import wade from "../public/images/testimonials/wade.png"
import jenny from "../public/images/testimonials/jenny.png"
import styles from "../styles/Testimonials.module.css"

export default function Testimonials() {
  return (
      <div className={styles.testimonials}>
        <div className={styles.tRow}>
          <div className={styles.tItemContainer}>
            <div className={styles.tImageContainer}>
              <Image
                alt="paraphIcon"
                src={sign}
                quality={100}
              />
            </div>
            <div className={styles.tDescription}>
              <p>Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.</p>
            </div>
            <div className={styles.tAuthor}>
            <Image
                alt="HadidAuthor"
                src={hadid}
                quality={100}
              />
            </div>
          </div>
          
          <div className={styles.tItemContainer}>
            <div className={styles.tImageContainer}>
              <Image
                alt="paraphIcon"
                src={sign}
                quality={100}
              />
            </div>
            <div className={styles.tDescription}>          
             <p>It is both attractive and highly adaptable. It is exactly what I have been looking forefinitely wo lorem ipsum dolorth the investment.</p>
            </div>
            <div className={styles.tAuthor}>
            <Image
                alt="WadeAuthor"
                src={wade}
                quality={100}
              />
            </div>
         
          </div>
          <div className={styles.tItemContainer}>
            <div className={styles.tImageContainer}>
              <Image
                alt="paraphIcon"
                src={sign}
                quality={100}
              />
            </div>
            <div className={styles.tDescription}>
              <p>I am really satisfied with it. I am good to go. It really saves me time and effort. It is exactly what our business has been lacking. </p>
            </div>
            <div className={styles.tAuthor}>
            <Image
                alt="JennyAuthor"
                src={jenny}
                quality={100}
              />
            </div>

          </div>
        </div>
      </div>
  );
}
