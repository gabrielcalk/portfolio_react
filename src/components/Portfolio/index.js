import allThings from './images/all_things_pet.png';
import marvelous_battle from './images/Marvelous_battle.png';
import weather_dash from './images/Weather_dash.png';
import quiz_js from './images/Quiz_js.png';
import tech_blog from './images/tech_blog.png';
import team_generator from './images/team_generator.png'
import './style.css'

export default function RenderPortfolio(){
    const projectSmall = [
        {
            "title": "Repository - All Things Pets",
            "alt": "All_Things_Pet",
            "image": allThings,
            "link": "https://vast-retreat-92642.herokuapp.com/",
            "link_repo": "https://github.com/gabrielcalk/all_things_pets"
        },
        {
            "title": "Repository - Marvelous",
            "alt": "Marvelous_Battle",
            "image": marvelous_battle,
            "link": "https://gabrielcalk.github.io/marvelous_dc/",
            "link_repo": "https://github.com/gabrielcalk/marvelous_dc.git"
        },
        {
            "title": "Repository - Weather Dash",
            "alt": "Weather_dashboard",
            "image": weather_dash,
            "link": "https://gabrielcalk.github.io/weather_dashboard_with_api/",
            "link_repo": "https://github.com/gabrielcalk/weather_dashboard_with_api.git"
        },
        {
            "title": "Repository - Quiz",
            "alt": "Quiz_Project",
            "image": quiz_js,
            "link": "https://gabrielcalk.github.io/quiz_game/",
            "link_repo": "https://github.com/gabrielcalk/quiz_game.git"
        },
        {
            "title": "Repository - Blog",
            "alt": "Blog_Dashboard",
            "image": tech_blog,
            "link": "https://infinite-forest-44093.herokuapp.com/",
            "link_repo": "https://github.com/gabrielcalk/full_stack_tech_blog"
        },
        {
            "title": "Repository - Team Manag",
            "alt": "team_management_generator",
            "image": team_generator,
            "link": "https://github.com/gabrielcalk/team_management_generator",
            "link_repo": "https://github.com/gabrielcalk/full_stack_tech_blog"
        }

    ];

    return(
        <>
        <h3 id="work" class="flexbox title">Projects</h3>
            <hr/>
            <section class="class_work">
            <div class="flexbox_image-container">
                {projectSmall.map(project =>(
                    <div className="big_image_class">
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