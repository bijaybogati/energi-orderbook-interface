import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import OrderBookEntrance from "../components/OrderBookEntrance";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Order Book Interface-Energi</title>
        <meta
          name="description"
          content="Energi dApps development challenge: interface-orderbook"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <OrderBookEntrance />
    </div>
  );
};

export default Home;
