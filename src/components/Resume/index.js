import resume from '../../images/resume.pdf'
import './style.css'

export default function RenderResume(){
    return (
        <>
            <h3 className="instructions_resume">Click On the Button Below to See My Resume</h3>
            <div className="div_button_resume">
                <a href={resume}><button className="submit-btn">Download</button></a>
            </div>
        </>
    )
}