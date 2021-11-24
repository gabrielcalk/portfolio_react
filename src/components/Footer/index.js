import './style.css'

export default function RenderFooter(){
    return (
        <>
            <h3 id="contact" className="flexbox title">Contact Me</h3>
            <hr/>
            <footer>
                <section className="footer_informations">
                    <a href="https://api.whatsapp.com/send?phone=14078078766">407 807 8766</a>
                    <a href="mailto: gabrielcalk@outlook.com">gabrielcalk@outlook.com</a>
                    <a href="https://github.com/gabrielcalk">GitHub</a>
                    <a href="https://www.linkedin.com/in/gabriel-cavalcante-causin">Linkedin</a>
                </section>
            </footer>
        </>
    )
}