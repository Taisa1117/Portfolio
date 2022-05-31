import styles from "../styles/Home.module.css";
import { Instagram } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Twitter } from "@mui/icons-material";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className="footer-ul">
          <li>
            <a
              href="https://www.instagram.com/taichi1117sasaki/"
              target="_blank"
            >
              <Instagram />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/Taisa1117" target="_blank">
              <GitHubIcon />
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/taichisasaki111" target="_blank">
              <Twitter />
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
