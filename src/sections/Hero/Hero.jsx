import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/IMG_4893-photoaidcom-cropped.png";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/cv.pdf";
import garrett_resume from "../../assets/Garrett Bollenbacher '25 Resume.docx.pdf";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "dark" ? moon : sun;
  const githubIcon = theme === "dark" ? githubDark : githubLight;
  const linkedinIcon = theme === "dark" ? linkedinDark : linkedinLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Garrett <br /> Bollenbacher
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://github.com/garrettbollenbacher" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/garrett-bollenbacher/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Pursuing a career at the intersection of technology and business
        </p>
        <a href={garrett_resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
      <svg
        className={styles.scrollIndicator}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 13l5 5 5-5" />
        <path d="M7 6l5 5 5-5" />
      </svg>
    </section>
  );
}

export default Hero;
