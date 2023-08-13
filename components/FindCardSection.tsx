import React from "react";
import Image from 'next/image'

import styles from "../styles/FindCardSection.module.css"
import Bstyles from "../styles/Banner.module.css"
import cards from "../public/images/findCard/cards.png"

export default function FindCardSection() {

    function clickHandler(){
        return;
    }
  return (

    <div className={styles.findCard}>
    <div className={styles.findCardContainer}>
        <div className={styles.findCardTitle}>
            <h1>Find the Perfect Credit Card for You</h1>
        </div>
        <div className={styles.findCardText}>
            <p>Discover your ideal credit card with ease. Our comprehensive selection caters to every 
              financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, 
              we have the perfect credit card waiting for you. Unleash the possibilities 
              and find the credit card that fits your unique goals and aspirations.</p>
        </div>
        <div className={Bstyles.bannerGreenButton} onClick={clickHandler} >
            <p>Learn More</p>
        </div>
    </div>
    <div className={styles.findCardImg}>
        <Image
            alt="cardsImg"
            src={cards}
        />
    </div>
</div>
  );
}
