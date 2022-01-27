import allThings from './images/all_things_pet.png';
import marvelous_battle from './images/Marvelous_battle.png';
import weather_dash from './images/Weather_dash.png';
import algo_home from './images/home_Algo_Education.png'
import chess from './images/Chess.png'
import './style.css'

export default function RenderPortfolio(){
    const projectSmall = [
        {
            "title": "React - Algo Education",
            "alt": "Algo_Education",
            "image": algo_home,
            "className": 'algo_education',
            "link": "https://algo-education.herokuapp.com/",
            "link_repo": "https://github.com/gabrielcalk/algo_education"
        },
        {
            "title": "Java - Chess Game",
            "alt": "Chess_Game_Java",
            "image": chess,
            "className": "chess_game",
            "link": "https://github.com/gabrielcalk/chess_java",
            "link_repo": "https://github.com/gabrielcalk/chess_java"
        },
        {
            "title": "Repository - All Things Pets",
            "alt": "All_Things_Pet",
            "image": allThings,
            "className": 'allthings',
            "link": "https://vast-retreat-92642.herokuapp.com/",
            "link_repo": "https://github.com/gabrielcalk/all_things_pets"
        },
        {
            "title": "Repository - Marvelous",
            "alt": "Marvelous_Battle",
            "className": 'marvel',
            "image": marvelous_battle,
            "link": "https://gabrielcalk.github.io/marvelous_dc/",
            "link_repo": "https://github.com/gabrielcalk/marvelous_dc.git"
        },
    ];

    return(
        <>
        <h3 id="work" class="flexbox title">Projects</h3>
            <hr/>
            <section class="class_work">
            <div class="flexbox_image-container">
                {projectSmall.map(project =>(
                    <div className={`big_image_class ${project?.className}`}>
                        <figure className="class_image">
                            <a href={project.link}>
                            <img class="b_image glow" src={project.image} alt={project.alt}/>
                            <figcaption class="big-image-text"><a href={project.link_repo}>{project.title}</a></figcaption>
                            </a>
                        </figure>
                    </div>
                ))}
                <img></img>
            </div>
            </section>
        </>
    )
}