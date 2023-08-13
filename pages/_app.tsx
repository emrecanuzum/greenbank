import "../styles/globals.css"
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner";
import LogoSlider from "../components/LogoSlider";
import Features from "../components/Features"
import DesignCardSection from "../components/DesignCardSection"
import FindCardSection from "../components/FindCardSection"
import Testimonials from "../components/Testimonials"
import FAQs from "../components/FAQs"
import EasyWay from "../components/EasyWay"
import Footer from "../components/Footer"
import About from '../components/About';

require("@solana/wallet-adapter-react-ui/styles.css");

interface AnalyticsData {
  performance: string;
  clients: string;
  transactions: string;
  funds: string;
}

interface AboutProps {
  analyticsData: AnalyticsData;
}

function MyApp({analyticsData}: AboutProps) {

  return (
      <main className={styles.main}>
        <div className={styles.bgWrap}>
          <Image alt="travel" src="/images/bg.png" layout="fill" objectFit="cover" quality={100}/>
        </div>

        <Navbar/>
        <Banner/>
        <About analyticsData={analyticsData} />
        <LogoSlider/>
        <Features/>
        <DesignCardSection/>
        <FindCardSection/>
        <Testimonials/>
        <FAQs/>
        <EasyWay/>
        <Footer/>
        
    </main>
  );
}


export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/analytics");
  const data = await response.json();
  console.log(data);
  if(!data){
      console.log("data yok")
  }
  return {
      props: {
          analyticsData: data,
      },
  };
}

export default MyApp;
