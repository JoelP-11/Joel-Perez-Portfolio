import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return ( <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link='https://doc-talk-1217027d6c32.herokuapp.com/' 
        h3="Viberr"
        p="Streaming App"
        />
        <ProjectCard src={freshBurger} link='https://doc-talk-1217027d6c32.herokuapp.com/' 
        h3="Fresh Burger"
        p="Hamburger Restaurant"
        />
        <ProjectCard src={hipsster} link='https://doc-talk-1217027d6c32.herokuapp.com/' 
        h3="Hipsster"
        p="Glasses Shop"
        />
        <ProjectCard src={fitLift} link='https://doc-talk-1217027d6c32.herokuapp.com/' 
        h3="FitLift"
        p="Fitness App"
        />
        <ProjectCard src={freshBurger} link='https://doc-talk-1217027d6c32.herokuapp.com/' 
        h3="Fresh Burger"
        p="Hamburger Restaurant"
        />
    </div>
  </section>
  );
}

export default Projects