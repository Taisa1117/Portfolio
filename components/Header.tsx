import { style } from "@mui/system";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const pages = ["About", "Works", "Contact"];
export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <h2 className={styles.headerH2}>Taichi Sasaki</h2>
        </a>
      </Link>
      <input type={"checkbox"} id="menu_bar" hidden />
      <ul id="header_links">
        {pages.map((page) => {
          return (
            <li key={page} className={`${page.toLowerCase()}`}>
              <Link href={`/${page}`}>
                <a>{page}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
