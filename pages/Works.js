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
                  大学の課題でAIオセロを作成しました。 実装言語はJavaです。
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
              </div>
            </li>

            <li>
              <h3>インターン活動</h3>
              <p>
                インターン活動ではタスク管理アプリ「facil」の開発に携わらせていただきました。
                JavaScriptライブラリであるReactを用いて実装しました。
                具体的にはhelpページの作成や一部コンポーネントの作成をしました。
                ヘルプページではHeadlessCMSであるStrapiのAPIを使用して記事を取得し、さらにページ内検索ができるようにAlgoliaを用いました。
                <br></br>
                <br></br>
                （現段階ではfacilはリリースされていないため写真などが掲載できません）
              </p>
            </li>

            <li>
              <h3>アルバイト活動</h3>
              <p>
                株式会社YPスイッチ様の小中学生向けプログラミング教室HALLOの講師を務めています。現在1年半携わらせていただいています。
                ここではPlaygramという教材を用いています。
                私はただ講師としてレッスンを提供するだけでなく、そのPlaygram内で新しく生徒向けの教材作成のお手伝いをさせていただいています。
                また、そこでも講師がレッスンの際に用いるツールの作成にも携わらせていただいています。
              </p>
            </li>
          </ul>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// JavaのAIオセロなど
