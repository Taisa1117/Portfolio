import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Works.module.css";

export default function Works() {
  return (
    <div>
      <Head>
        <title>Works</title>
      </Head>
      <Header />
      <div style={{ height: 80 }}></div>
      <div className={styles.worksContainer}>
        <main className={styles.worksMain}>
          <h1 className={styles.worksH1}>Works</h1>
          <br />
          <ul>
            <li>
              <h3>AIオセロ</h3>
              <div className={styles.pictures}>
                <p>
                  Javaでオセロ対戦ゲームを実装しました。
                  複数のAIで対戦ができますが、中でもMyAIではそれぞれのマスに点数をつけて最終的に勝てるような盤面を計算します(必ず勝てるとは限りません…)。
                </p>
                <div className={styles.images}>
                  <Image
                    src={"/Images/jsvs-picture/select.PNG"}
                    className={styles.worksImg}
                    height="250"
                    width="250"
                    alt="人、もしくはどのAIを使用するかを選ぶ"
                  />
                  <Image
                    src={"/Images/jsvs-picture/run.PNG"}
                    height={250}
                    width={250}
                    alt="実際に動かす"
                  />
                  <Image
                    src={"/Images/jsvs-picture/result.PNG"}
                    height={250}
                    width={250}
                    alt="結果がでる"
                  />
                </div>
                <a href="https://github.com/Taisa1117/AIReversi">
                  ソースコード
                </a>
              </div>
            </li>
          </ul>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// JavaのAIオセロなど
