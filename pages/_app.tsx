import "../styles/globals.css"
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar"

require("@solana/wallet-adapter-react-ui/styles.css");

function MyApp() {

  return (
      <main className={styles.main}>
      <div className={styles.bgWrap}>
        <Image
          alt="travel"
          src="/images/bg.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <Navbar/>

    </main>
  );
}

export default MyApp;
