
import styles from "../styles/Features.module.css"
import Image from 'next/image'

import security from "../public/images/features/security.png"
import piechart from "../public/images/features/pie.png"
import graph from "../public/images/features/Rectangle.png"

export default function Features() {

    function clickHandler(){
        return;
    }

    return (
        <div className={styles.features}>
            <div className={styles.featuresTitle}>
                <h1>What do we offer?</h1>
            </div>
            <div className={styles.containerFeature}>
                <div className={styles.featureItem}>
                    <div className={styles.itemImage}>
                    <Image
                                        alt="securityIcon"
                                        src={security}
                                        quality={100}
                                    />
                    </div>
                    <div className={styles.itemInfo}>
                        <div className={styles.itemHeader}>
                            <h3>Security Guarantee</h3>
                        </div>
                        <div className={styles.itemText}>
                            <p>Your date and funds will be securely protected.</p>
                        </div>
                    </div>
                    
                </div>
            
            
                <div className={styles.featureItem}>
                    <div className={styles.itemImage}>
                    <Image
                                        alt="piechartIcon"
                                        src={piechart}
                                        quality={100}
                                    />
                    </div>
                    <div className={styles.itemInfo}>
                        <div className={styles.itemHeader}>
                            <h3>Investing</h3>
                        </div>
                        <div className={styles.itemText}>
                            <p>Your data and funds will be securely protected.</p>
                        </div>
                    </div>
                    
                </div>
            
            
                <div className={styles.featureItem}>
                    <div className={styles.itemImage}>
                    <Image
                                        alt="graphIcon"
                                        src={graph}
                                        quality={100}
                                    />
                    </div>
                    <div className={styles.itemInfo}>
                        <div className={styles.itemHeader}>
                            <h3>Multiple Method</h3>
                        </div>
                        <div className={styles.itemText}>
                            <p>Your date and funds will be securely protected.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
  }