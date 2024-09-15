import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/cv.pdf";
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
        <p>Pursuing a career at the intersection of technology and business</p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
