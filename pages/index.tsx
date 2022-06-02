import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>佐々木泰一|Portfolio</title>
      </Head>
      <Image
        src={"/Images/blank-identity-stationery-set-isolated-on-white.jpg"}
        layout="fill"
        alt="Image"
        objectFit="cover"
        className={styles.topImg}
      />
      <Header />
      <div className={styles.p_div}>
        <p className={styles.homeP}>Welcom to my portfolio!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
