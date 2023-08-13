import styles from "../styles/About.module.css";
import React from "react";

interface AnalyticsData {
    performance: string;
    clients: string;
    transactions: string;
    funds: string;
}

interface AboutProps {
    analyticsData: AnalyticsData;
}

function About({ analyticsData }: AboutProps) {
    if (!analyticsData) {
        return(
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutRow}>
                    <div className={styles.aboutItem}>
                        <h1>3s</h1>
                        <p>Ultra performance</p>
                    </div>
                    <div className={styles.aboutItem}>
                        <h1>643</h1>
                        <p>Worldwide Clients</p>
                    </div>
                    <div className={styles.aboutItem}>
                        <h1>+142K</h1>
                        <p>Total transactions</p>
                    </div>
                    <div className={styles.aboutItem}>
                        <h1>+123M</h1>
                        <p>Totel entrused funds</p>
                    </div>
                </div>   
            </div>
        </div>
        )
    }
        
        

    return (
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                <p>Performance: {analyticsData.performance}</p>
                <p>Clients: {analyticsData.clients}</p>
                <p>Transactions: {analyticsData.transactions}</p>
                <p>Funds: {analyticsData.funds}</p>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const response = await fetch("http://localhost:3000/api/analytics");
    const data = await response.json();
    console.log(data);
    
    if(!data){
        console.log("no data")
    }
    return {
        props: {
            analyticsData: data,
        },
    };
}

export default About;