import styles from "../styles/Banner.module.css"
import Image from 'next/image'

import bannerImg from "../public/images/banner/bannerimage.png"
import activeUser from "../public/images/banner/activeUser.png"
export default function Banner() {

    function clickHandler(){
        return;
    }

    return (
        <div className={styles.banner}>
            <div className={styles.bannerContainer}>
                <div className={styles.bannerTitle}>
                    <h1>Discover the Perfect Credit Card for You</h1>
                </div>
                <div className={styles.bannerText}>
                    <p>Discover the power of our secure and rewarding credit cards. 
                        Explore our range of credit cards and take control of your finances today.</p>
                </div>
                <div className={styles.bannerGreenButton} onClick={clickHandler} >
                    <p>Get Started</p>
                </div>
                <div className={styles.bannerActiveUsers}>
                    <Image
                        alt="active user"
                        src={activeUser}             
                        quality={100}
                    />
                    <div className={styles.bannerActiveUsersContainer}>
                        <h1>10.2k+</h1>
                        <p>Active users around the world</p>
                    </div>
                </div>
            </div>
            <div className={styles.bannerImg}>
                <Image
                    alt="bannerImg"
                    src={bannerImg}             
                    quality={100}
                />
            </div>
        </div>
    );
  }