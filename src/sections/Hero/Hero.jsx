import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Joels_portfolio_pic.svg';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Joel Perez Primary FS Resume (9).pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sunIcon : moonIcon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;

  return ( 
  <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero}
        src={heroImg} 
        alt="Profile picture of Joel Perez" />
        <img className={styles.colorMode}
         src={themeIcon}
         alt="Color mode icon" 
         onClick={toggleTheme}
         />
    </div>
    <div className={styles.info}>
    <h1>
        Joel

        <br />
        Perez
    </h1>
    <h2>Frontend Developer</h2>
    <span>
        <a href="https://linkedin.com/in/joel-perez-9365a9277/" target="_blank">
            <img src ={linkedinIcon} alt="Linkedin Icon" />
        </a>
        <a href="https://github.com/JoelP-11" target="_blank">
            <img src ={githubIcon} alt="GitHub Icon" />
        </a>
    </span>
    <p className={styles.description}>
        With a passion for developing modern React web apps for commercial businesses.
    </p>
    <a href={CV} download>
        <button className="hover">
            Resume
        </button>
    </a>
    </div>

</section>
  );
}

export default Hero;