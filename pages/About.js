import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/About.module.css";
export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <div style={{ height: 80 }}></div>
      <div className={styles.aboutContainer}>
        <main className={styles.aboutMain}>
          <h1 className={styles.aboutH1}>About</h1>
          <br></br>
          <div className={styles.profile}>
            <h3>大学</h3>
            <p>法政大学 情報科学部 コンピュータ科</p>
            <p>研究室：機械学習の音声認識の分野</p>
          </div>
          <div className={styles.profile}>
            <h3>経歴</h3>
            <p>
              大学にてPython, C/C++, Javaに触れオブジェクト指向を学ぶ。
              <br />
              大学とは別にReactをはじめとしてNext.jsフレームワークを学習。
            </p>
          </div>
          <div className={styles.profile}>
            <h3>趣味</h3>
            <ul>
              <li>
                <h4>運動</h4>
                <p>
                  小学生の時に地域のサッカークラブに所属しており、ポジションは６年間でキーパーからフォワードまでさまざま。
                  <br />
                  中学生の頃はバスケ部に所属。「足の次は手！」と思い入部。
                  <br />
                  高校生では水泳部に所属。理由は入学してからできた友達から誘われたから。ひたすら自分を苛め抜く競技なので楽しさに欠けたが、周りの友人や先輩後輩が人柄の良い人たちでここに入部したことを心からよかったと思っている。
                </p>
              </li>
              <li>
                <h4>ゲーム</h4>
                <p>
                  スマブラがなんだかんだ一番好きで発売当初からずっと飽きない。他にもドラクエやイナズマイレブンなどが好き。高校の頃はひたすらゲーム実況をみていた。
                </p>
              </li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
