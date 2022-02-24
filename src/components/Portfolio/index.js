import allThings from "./images/all_things_pet.png";
import marvelous_battle from "./images/Marvelous_battle.png";
import alien_invasion from "./images/alien_invasion.png";
import algo_home from "./images/home_Algo_Education.png";
import chess from "./images/Chess.png";
import "./style.css";

export default function RenderPortfolio() {
  const projectSmall = [
    {
      title: "Repository - Algo Education",
      alt: "Algo_Education",
      image: algo_home,
      className: "algo_education",
      link: "https://algo-education.herokuapp.com/",
      link_repo: "https://github.com/gabrielcalk/algo_education",
      title_about_project: "About the Algo Education",
      link_project_write: "https://algo-education.herokuapp.com/",
      link_repo_write: "https://github.com/gabrielcalk/algo_education",
      purpose:
        "Algo Education is an educational program that allows developers to learn visually and with simple and clear explanations some of the algorithms that exist in the programming world.",
      tech: "JavaScript, React.Js, HTML, CSS in JS, Heroku.",
      challenges: "Applied the algorithms animations using react and understand the process of the algorithm to use it in animations."    },
    {
      title: "Repository - Chess Game",
      alt: "Chess_Game_Java",
      image: chess,
      className: "chess_game",
      link: "https://github.com/gabrielcalk/chess_java",
      link_repo: "https://github.com/gabrielcalk/chess_java",
      title_about_project: "About the Chess Game",
      // link_project_write: "https://github.com/gabrielcalk/chess_java",
      link_repo_write: "https://github.com/gabrielcalk/chess_java",
      purpose:
        "A chess game built 100% in java that has all the rules and moves of the game.",
      tech: "Java.",
      challenges: "Developed the whole chess using OOP concepts and added the checkmate, promotion, and castling rules."
    },
    {
      title: "Repository - All Things Pets",
      alt: "All_Things_Pet",
      image: allThings,
      className: "allthings",
      link: "https://vast-retreat-92642.herokuapp.com/",
      link_repo: "https://github.com/gabrielcalk/all_things_pets",
      title_about_project: "About the All Things Pets (Created in Group)",
      link_project_write: "https://vast-retreat-92642.herokuapp.com/",
      link_repo_write: "https://github.com/gabrielcalk/all_things_pets",
      purpose:
        "This application's purpose is to create a database on pet ownership and descriptions of various animals so that the user can make a more informed decision about future pet adoptions or integrating the user's pet into their daily activities.",
      tech: "JavaScript, Handlebars, MySQL, Sequelize, Node.js, HTML and CSS, Heroku.",
      challenges: "We weren't able to find a api that had the information we were looking for so we had to manually input each line of the database from pet websites in order to use the data we need to create the correct information needed to solve our problem, getting dog question user to be able to select more than one option, and connecting the database to heroku."
    },
    {
      title: "Repository - Alien Invasion",
      alt: "Alien Invasion",
      image: alien_invasion,
      className: "alien_invasion",
      link: "https://github.com/gabrielcalk/alien_invasion_python",
      link_repo: "https://github.com/gabrielcalk/alien_invasion_python",
      title_about_project: "About the Alien Invasion",
      // link_project_write: "https://github.com/gabrielcalk/alien_invasion_python",
      link_repo_write: "https://github.com/gabrielcalk/alien_invasion_python",
      purpose:
        "In Alien Invasion, the player controls a rocket ship that appears at the bottom center of the screen. The player can move the ship right and left using the arrow keys and shoot bullets using the spacebar. When the game begins, a fleet of aliens fills the sky and moves across and down the screen. The player shoots and destroys the aliens. If the player shoots all the aliens, a new fleet appears that moves faster than the previous fleet. If any alien hits the player’s ship or reaches the bottom of the screen, the player loses a ship. If the player loses three ships, the game ends.",
      tech: "Python.",
      challenges: "Understand how the Pygame works with multiple elements and set up the game in the correct order on the while loop that runs the game." 
    },
    {
      title: "Repository - Marvelous",
      alt: "Marvelous_Battle",
      className: "marvel",
      image: marvelous_battle,
      link: "https://gabrielcalk.github.io/marvelous_dc/",
      link_repo: "https://github.com/gabrielcalk/marvelous_dc.git",
      title_about_project: "About the Marvelous (Created in Group)",
      link_project_write: "https://gabrielcalk.github.io/marvelous_dc/",
      link_repo_write: "https://github.com/gabrielcalk/marvelous_dc.git",
      purpose:
        "This webpage allows the user to pick their favorite three characters from the MCU and battle against an opposing team of characters.",
      tech: "JavaScript, HTML and CSS.",
      challenges: "Work as a group through github and added the heroes cards animations."
    },
  ];

  return (
    <div className="div_portfolio">
      <h3 id="work" class="flexbox title">
        Projects
      </h3>
      <hr />
      <section class="class_work">
        <div class="flexbox_image-container">
          {projectSmall.map((project) => (
            <div className="div_project">
              <div className={`big_image_class ${project?.className}`}>
                <figure className="class_image">
                  <a href={project.link}>
                    <img
                      class="b_image glow"
                      src={project.image}
                      alt={project.alt}
                    />
                    <figcaption class="big-image-text">
                      <a href={project.link_repo}>{project.title}</a>
                    </figcaption>
                  </a>
                </figure>
              </div>
              <div className="about_project_div">
                <h3 className="about_project_title">
                  {project.title_about_project}
                </h3>
                <div className="info_about_project">
                  <p className="about_project">{project.purpose}</p>
                  <p><strong>Technologies Used: </strong>{project.tech}</p>
                  <br></br>
                  <p><strong>Challenges: </strong>{project.challenges}</p>
                </div>
                <div className="links_div_write">
                  {project.link_project_write ? 
                  <p>Project: <a href={project.link_project_write}>{project.link_project_write ? project.link_project_write : ''}</a></p>
                  : ''
                  }
                  <p>Repository: <a href={project.link_repo_write}>{project.link_repo_write}</a></p>
                </div>
              </div>
            </div>
          ))}
          <img></img>
        </div>
      </section>
    </div>
  );
}
