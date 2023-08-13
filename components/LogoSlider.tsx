import styles from "../styles/LogoSlider.module.css"
import Image from 'next/image'

import upwork from "../public/images/logoSlider/upwork.png"
import petal from "../public/images/logoSlider/petal.png"
import rakuten from "../public/images/logoSlider/rakuten.png"
import nyt from "../public/images/logoSlider/nyt.png"
import vice from "../public/images/logoSlider/vice.png"
import dell from "../public/images/logoSlider/dell.png"

export default function LogoSlider() {
    function clickHandler(){
        return;
    }

    return (
            <div className={styles.LogoSlider}>         
                <div className={styles.slider}>
                     <div className={styles.l_to_r}>
                         <div className={styles.slider_inner}>
		                    	<div>
                                    <Image
                                        alt="upworkLogo"
                                        src={upwork}
                                        quality={100}
                                    />
                                </div>
		                    	<div>
                                    <Image
                                        alt="petalLogo"
                                        src={petal}
                                        quality={100}
                                    />
                                </div>
		                    	<div>
                                    <Image
                                        alt="rakutenLogo"
                                        src={rakuten}
                                        quality={100}
                                    />
                                </div>
		                    	<div className={styles.nytSpecial}>
                                    <Image
                                        alt="nytLogo"
                                        src={nyt}
                                        quality={100}
                                    />
                                </div>
		                    	<div>
                                    <Image
                                        alt="viceLogo"
                                        src={vice}
                                        quality={100}
                                    />
                                </div>
                                <div>
                                    <Image
                                        alt="dellLogo"
                                        src={dell}
                                        quality={100}
                                    />
                                </div>
		                    </div>
                         <div className={styles.slider_inner}>
                         <div>
                                    <Image
                                        alt="upworkLogo"
                                        src={upwork}
                                        quality={100}
                                    />
                                </div>
		                    	<div>
                                    <Image
                                        alt="petalLogo"
                                        src={petal}
                                        quality={100}
                                    />
                                </div>
		                    	<div>
                                    <Image
                                        alt="rakutenLogo"
                                        src={rakuten}
                                        quality={100}
                                    />
                                </div>
		                    	<div className={styles.nytSpecial}>
                                    <Image
                                        alt="nytLogo"
                                        src={nyt}
                                        quality={100}
                                    />
                                </div>
		                    	<div>
                                    <Image
                                        alt="viceLogo"
                                        src={vice}
                                        quality={100}
                                    />
                                </div>
                                <div>
                                    <Image
                                        alt="dellLogo"
                                        src={dell}
                                        quality={100}
                                    />
                                </div>
                         </div>
		                </div>
	            </div>
            </div>


        
    );
  }