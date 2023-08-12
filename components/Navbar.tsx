import Image from 'next/image'
import styles from "../styles/Home.module.css"

import AppBar from "../components/AppBar"
import ContextProvider from "../contexts/ContextProvider"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"

export default function Navbar() {

  return (

      <div className={styles.navbar}>

        <div className={styles.navbarLogo}>
          <Image
            alt="greenbankLogo"
            src="/images/navbar/logo.png"
            width={140}
            height={24}
            quality={100}
          />
        </div>

        <div className={styles.navbarButton}>
          <a href='.'>Why Us</a>
          <a href='.'>Services</a>
          <a href='.'>Out Process</a>
          <a href='.'>Payments</a>
          <a href='.'>FAQs</a>
        </div>

        <div className={styles.walletButton}>
            <ContextProvider>
                <WalletModalProvider>
                    <AppBar/>    
                </WalletModalProvider>
            </ContextProvider>
        </div>
        
      </div>
  )
}
