import React from "react";
import Image from 'next/image'

import styles from "../styles/DesignCardSelection.module.css"
import Bstyles from "../styles/Banner.module.css"
import cards from "../public/images/designCard/cards.png"

export default function DesignCardSection() {

    function clickHandler(){
        return;
    }
  return (

    <div className={Bstyles.banner}>
    <div className={styles.designCardContainer}>
        <div className={styles.designCardTitle}>
            <h1>Design your personalized credit card.</h1>
        </div>
        <div className={Bstyles.bannerText}>
            <p>You have the freedom to personalize the design of your credit card, 
                ensuring a truly unique experience that makes you feel extraordinary</p>
        </div>
        <div className={Bstyles.bannerGreenButton} onClick={clickHandler} >
            <p>Create New Card</p>
        </div>
    </div>
    <div className={styles.designCardImg}>
        <Image
            alt="cardsImg"
            src={cards}             
            quality={100}
        />
    </div>
</div>
  );
}
